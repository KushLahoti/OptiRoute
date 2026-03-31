import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },

        location: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            },
        },

        customerName: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
        },

        status: {
            type: String,
            enum: ["pending", "assigned", "out_for_delivery", "delivered"],
            default: "pending",
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agent",
        },

        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium",
        },

        deliveredAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Delivery = mongoose.model('Delivery', deliverySchema)

export default Delivery