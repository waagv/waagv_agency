import {ObjectId} from "mongodb";
import WhyModel from "../../models/Why/WhyModel.js";

// Create
export const WhyCreateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await WhyModel.updateOne({role: role}, {$set: reqBody}, {upsert: true, new: true});

            return { status: 'success', message: 'Why content created successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Update
export const WhyUpdateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await WhyModel.updateOne({role: role}, {$set: reqBody}, {new: true});

            return { status: 'success', message: 'Why content updated successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Read
export const WhyReadService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        const MatchingStage = { $match: { _id: id } };
        const ProjectionStage = { $project: { "_id": 0, "role": 0}}

        if( role === 'admin' ){

            const data = await WhyModel.aggregate([
                MatchingStage,
                ProjectionStage
            ]);

            return { status: 'success', message: 'Why content read successfully!', data: data };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Delete
export const WhyDeleteService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        if( role === 'admin' ){

            await WhyModel.deleteOne({_id: id});

            return { status: 'success', message: 'Why content deleted successfully!', };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}