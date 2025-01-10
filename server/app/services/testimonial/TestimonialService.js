import {ObjectId} from "mongodb";
import TestimonialModel from "../../models/testimonial/TestimonialModel.js";

// Create
export const TestimonialCreateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await TestimonialModel.updateOne({role: role}, {$set: reqBody}, {upsert: true, new: true});

            return { status: 'success', message: 'Testimonial content created successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Update
export const TestimonialUpdateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await TestimonialModel.updateOne({role: role}, {$set: reqBody}, {new: true});

            return { status: 'success', message: 'Testimonial content updated successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Read
export const TestimonialReadService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        const MatchingStage = { $match: { _id: id } };
        const ProjectionStage = { $project: { "_id": 0, "role": 0}}

        if( role === 'admin' ){

            const data = await TestimonialModel.aggregate([
                MatchingStage,
                ProjectionStage
            ]);

            return { status: 'success', message: 'Testimonial content read successfully!', data: data };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Delete
export const TestimonialDeleteService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        if( role === 'admin' ){

            await TestimonialModel.deleteOne({_id: id});

            return { status: 'success', message: 'Testimonial content deleted successfully!', };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}