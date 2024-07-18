import {prisma} from '../../prisma/index.js'

// create a new user

export const createUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.create({
        data: {
        email,
        password,
        },
    });
    // check if user was created
    if(!user) {
        return res.status(400).json({error: 'User not created'});
    }

    
    res.json(user);
}

// get all users

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
}


