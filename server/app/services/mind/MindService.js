import {ObjectId} from "mongodb";
import MindModel from "../../models/mind/MindModel.js";

// Create
export const MindCreateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await MindModel.updateOne({role: role}, {$set: reqBody}, {upsert: true, new: true});

            return { status: 'success', message: 'Mind content created successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Update
export const MindUpdateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await MindModel.updateOne({role: role}, {$set: reqBody}, {new: true});

            return { status: 'success', message: 'Mind content updated successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Read
export const MindReadService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        const MatchingStage = { $match: { _id: id } };
        const ProjectionStage = { $project: { "_id": 0, "role": 0}}

        if( role === 'admin' ){

            const data = await MindModel.aggregate([
                MatchingStage,
                ProjectionStage
            ]);

            return { status: 'success', message: 'Mind content read successfully!', data: data };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Delete
export const MindDeleteService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        if( role === 'admin' ){

            await MindModel.deleteOne({_id: id});

            return { status: 'success', message: 'Mind content deleted successfully!', };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}