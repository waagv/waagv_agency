import {
    TestimonialCreateService, TestimonialDeleteService,
    TestimonialReadService,
    TestimonialUpdateService
} from "../../services/testimonial/TestimonialService.js";

// Create
export const CreateTestimonialContent = async (req, res) => {
    const result = await TestimonialCreateService(req, res);
    res.json(result);
}

// Update
export const UpdateTestimonialContent = async (req, res) => {
    const result = await TestimonialUpdateService(req, res);
    res.json(result);
}

// Read
export const ReadTestimonialContent = async (req, res) => {
    const result = await TestimonialReadService(req, res);
    res.json(result);
}

// Delete
export const DeleteTestimonialContent = async (req, res) => {
    const result = await TestimonialDeleteService(req, res);
    res.json(result);
}