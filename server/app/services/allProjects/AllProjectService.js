import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';
import {DEFAULT_IMAGE, IMAGE_PATH} from "../../config/config.js";
import {ObjectId} from "mongodb";
import AllProjectModel from "../../models/allProjects/AllProjectModel.js";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Content
export const AllProjectCreateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await AllProjectModel.updateOne({role: role}, {$set: reqBody}, {upsert: true, new: true});

            return { status: 'success', message: 'All project content created successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Create Content
export const AllProjectUpdateService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const reqBody = req.body;

        if( role === 'admin' ){

            await AllProjectModel.updateOne({role: role}, {$set: reqBody}, {new: true});

            return { status: 'success', message: 'All project content updated successfully!' };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Read Content
export const AllProjectReadService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        const MatchingStage = { $match: { _id: id } };
        const ProjectionStage = { $project: { "_id": 0, "role": 0}}

        if( role === 'admin' ){

            const data = await AllProjectModel.aggregate([
                MatchingStage,
                ProjectionStage
            ]);

            return { status: 'success', message: 'All project content read successfully!', data: data };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Delete Content
export const AllProjectDeleteService = async (req, res) => {
    try{

        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        if( role === 'admin' ){

            await AllProjectModel.deleteOne({_id: id});

            return { status: 'success', message: 'All project content deleted successfully!', };

        }else{
            return { status: 'fail', message: 'You are not authorized!' }
        }


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}

// Image Upload
export const AllProjectImageUploadService = async (req, res) => {
    try {
        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);
        const data = await AllProjectModel.aggregate([
            { $match: { _id: id } },
            { $project: { "_id": 0, "role": 0} }
        ]);

        if (role === 'admin') {
            if (data.length > 0 && data[0]["image"]) {
                const prevImagePath = data[0]["image"].replace(IMAGE_PATH, '');
                const fullPrevImagePath = path.join(__dirname, "../../../", prevImagePath);

                // console.log(fullPrevImagePath);

                if (prevImagePath !== '/uploads/default.png') {
                    try {
                        await fs.promises.access(fullPrevImagePath, fs.constants.F_OK);
                        await fs.promises.unlink(fullPrevImagePath);
                        // console.log('Previous image deleted successfully');
                    } catch (err) {
                        if (err.code === 'ENOENT') {
                            console.warn('Previous image not found, skipping delete');
                        } else {
                            console.error('Error deleting previous image:', err);
                            return { status: 'fail', message: 'Error deleting previous image!' }
                        }
                    }
                }

                if (!req.file) {
                    return { status: 'fail', message: "Image is required!" };
                }

                const imagePath = req.file.path;
                const image = `${IMAGE_PATH}/${imagePath}`;

                await AllProjectModel.updateOne({ "_id": id }, { $set: { image: image } });
                return { status: 'success', message: 'Image uploaded successfully!' };
            } else {
                return { status: 'fail', message: 'Hero content not found!' };
            }
        } else {
            return { status: 'fail', message: 'You are not authorized!' };
        }
    } catch (e) {
        console.error('Error in HeroImageUploadService:', e);
        return { status: 'error', message: e.message || 'Something went wrong!' };
    }
};

// Delete Single Image
export const AllProjectImageDeleteService = async (req, res) => {
    try {
        const role = req.headers['role'];
        const id = new ObjectId(req.params['id']);

        const data = await AllProjectModel.aggregate([
            { $match: { _id: id } },
            { $project: { "_id": 0, "role": 0} }
        ]);

        if (role === 'admin') {

            const filename = req.params.filename;

            if(filename === 'default.png'){
                return { status: 'fail', message: 'This file can not be deleted!' };
            }else {
                const filePath = path.join(__dirname, '../../../uploads', filename);
                // console.log(filePath)

                // Check file existence
                if(fs.existsSync(filePath) === true){
                    await fs.unlink(filePath, (err) => {
                        if(err){
                            return { status: 'fail', message: 'Error file deleting!' };
                        }
                    });
                    await AllProjectModel.updateOne({_id: id},{$set: {image: DEFAULT_IMAGE}});
                }else {
                    return { status: 'fail', message: 'File not found!' };
                }

                return { status: 'success', message: 'File deleted successfully!' };
            }

        } else {
            return { status: 'fail', message: 'You are not authorized!' };
        }
    } catch (e) {
        console.error('Error in HeroImageUploadService:', e);
        return { status: 'error', message: e.message || 'Something went wrong!' };
    }
};





































