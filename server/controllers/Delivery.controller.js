import Delivery from "../models/delivery.model.js";

export const createDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.create(req.body);
        res.status(201).json(delivery)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find();
        res.json(deliveries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};