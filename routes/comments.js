const Comment = require("../models/comment");
const express = require ("express")
const router = require("express").Router();
module.exports = router 
// ROUTE TO GET ALL COMMENTS

router.get("/comments", async (req, res) => {
  try {
    const data = await Comment.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ROUTE TO GET COMMENT BY ID

router.get("/comments/:commentId", async (req, res) => {
  try {
    const data = await Comment.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ROUTE TO CREATE COMMENTS 
router.post("/comments-create/:id", (req, res) =>{
    const {id} = req.params;
    // const {user, comment} = req.body;
    Comment.create({comment, userId, flightId: id, tags})
    .then ((newComment) => {
        re
    })
}) 

module.exports = router;


//populate when retrieving comments 
