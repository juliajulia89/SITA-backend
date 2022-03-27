const Comment = require("../models/comment");
const Flight = require("../models/flight");
const express = require("express");
const router = require("express").Router();
const mongoose = require ("mongoose")



// ROUTE TO GET ALL COMMENTS

router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.mesaage });
  }
});

// ROUTE TO GET COMMENT BY ID
router.get("/comments/:commentsId", getComment, (req, res) => {
res.json(res.comment)
})

async function getComment(req, res, next){
    let comment
  try {
    comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.mesaage });
  }
res.comment=comment
next()
};

// ROUTE TO CREATE COMMENTS
router.post("/comments", async (req, res) => {
  const comments = new Comment({
    comment: req.body.comment,
    userId: req.body.userId,
    flightId: req.body.flightId,
  })
  try {
      const newComment = await comment.save()
      res.status(201).json(newComment)
  } catch (err) {
    res.status(400).json({ message: err.mesaage });
  }
});

module.exports = router;


