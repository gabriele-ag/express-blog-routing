import express from "express";
import fs from "fs";

const router = express.Router();


// Index
router.get("/", (req, res) => {
    const dataJson = fs.readFileSync("./data/content.json")
    const posts = JSON.parse(dataJson)

    res.json({
        data: posts,
        count: posts.length,
    });    
});


// Show
router.get("/:id", (req, res) => {
    const dataJson = fs.readFileSync("./data/content.json")
    const posts = JSON.parse(dataJson)

    const postId = req.params.id
    const singlePost = posts.find((curPost) => curPost.id === postId)
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
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.json({
        data: `Cancello il post seguente ${postId}`
    })
})

export default router;