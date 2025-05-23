import express from "express";
import { post } from "../data/data.js";

const router = express.Router();


// Index
router.get("/", (req, res) => {
    console.log("Ecco la lista dei post")
    res.json({
        data: post,
        count:post.length,
    });
    
});


// Show
router.get("/:id", (req, res) => {
    console.log("Ecco il post richiesto")
    const postId = req.params.id
    const singlePost = post.find((curPost) => curPost.id === postId)
    res.json ({
        data: singlePost
    })
})


// Store
router.post("/", (req, res) => {
    res.json({
        data: "Aggiungo un post nuovo"
    })
})


// Update
router.put("/:id", (req,res) => {
    const postId = req.params.id
    res.json({
        data: `Modifico il post seguente ${postId}`
    })
})


// Delete
router.delete("/:id", (res,req) => {
    const postId = req.params.id
    res.json({
        data: `Cancello il post seguente ${postId}`
    })
})

export default router;