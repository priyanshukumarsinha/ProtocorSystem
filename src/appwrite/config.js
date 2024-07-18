import conf from "../../appwrite.config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite"; 

export class Service{
    client;
    databases;
    bucket;
    constructor(){
        this.client = new Client()
                        .setEndpoint(conf.appWriteUrl)
                        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost(slug, {title, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userID,
            });
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error :: ", error);
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
            });
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error :: ", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error :: ", error);
            return false;
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.storage.createFile(conf.appWriteBucketId, ID.unique(),
                file
        );
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error :: ", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            this.storage.deleteFile(conf.appWriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error :: ", error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(conf.appWriteBucketId, fileId);
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: error :: ", error);
            return false;
        }
    }


}

export const appwriteService = new Service();