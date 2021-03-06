#!/usr/bin/env node
"use strict";

import express from "express";
import controller from "../controllers/auth.mjs";
import passport from "passport"

const router = express.Router();

router.get("/secret", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json("You are authenticated! Otherwise you wont see it.");
});

router.post("/", controller.signup);
router.put("/", controller.login);
router.get("/", controller.logout);



export default router;

