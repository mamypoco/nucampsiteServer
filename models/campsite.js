//Setup Schema for campsite documents
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commentSchema = new Schema(
   {
      rating: {
         type: Number,
         min: 1,
         max: 5,
         required: true,
      },
      text: {
         type: String,
         required: true,
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
   },
   {
      timestamps: true,
   }
);

const campsiteSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
      },
      description: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         require: true,
      },
      elevation: {
         type: Number,
         required: true,
      },
      cost: {
         type: Currency,
         required: true,
         min: 0,
      },
      featured: {
         type: Boolean,
         default: false,
      },

      comments: [commentSchema],
      //this is to insert sub-document. You can have multiple sub-documents.
   },
   {
      timestamps: true,
   }
);

const Campsite = mongoose.model("Campsite", campsiteSchema);

module.exports = Campsite;
