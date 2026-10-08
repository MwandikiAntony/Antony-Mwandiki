---
title: "Designing a bursary system for students without email"
date: "2026-07-30"
category: "Projects"
tags: ["Bursary", "Inclusive Design", "MERN"]
excerpt: "Lessons from building the Igembe South Digital Bursary System around the real constraints students face."
---
Most sign-up flows assume you have an email address and a phone number. Many bursary applicants have neither, and they often apply from cyber cafes. The Igembe South Digital Bursary System was designed around that reality.

## Replacing paperwork

Bursary applications used to mean paper forms and in-person submissions. The new system lets students apply from any accessible device, including a basic phone.

## Inclusive by design

Students register and sign in with a birth certificate or admission number. A guided multi-step application covers personal details, academic information, fee breakdown, guardian information and document uploads. Students can then track their status in real time.

## Accountability for administrators

Ward, CDF and super administrators have role-based access to review, verify, approve or reject applications. Bulk approvals save time, and audit logs keep every action transparent.

## The stack

React and Tailwind CSS on the front end, Node.js and Express on the back end, MongoDB with Mongoose for data, and JWT authentication with password hashing.

The main lesson: inclusive design is an engineering requirement, not a nice extra.
