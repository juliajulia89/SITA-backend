const Comment = require("../models/comment");
const Flight = require("../models/flight");
const express = require("express");
const router = require("express").Router();



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

router.get("/comments/:commentsId", async (req, res) => {
  try {
    const comments = await Comment.findById(req.params.id);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.mesaage });
  }
});

// ROUTE TO CREATE COMMENTS
router.post("/comments", async (req, res) => {
  const comments = new Comment({
    comment: req.body.comment,
    userId: req.body.usertId,
    flightId: req.body.flightId,
  })
  try {
      const newComment = await comment.save()
      res.status(201).json(newComment)
  } catch (err) {
    res.status(400).json({ message: err.mesaage });
  }

  //const {user, comment} = req.body;
  //Comment.create({comment, userId, flightId: id, tags})
  //.then ((newComment) => {
  // })
});

module.exports = router;

//populate when retrieving comments
