# Pets On

## Introduction

// TODO describe the application

## Data Model

User
- id
- name : string (not nullable)
- age: number (not nullable)
- username : string (not nullable)
- password : string (not nullable)
- role (normal, admin) : string (not nullable)
- speciality ('hairdresser', 'walker', 'veterinary', ...) : string (nullable)
- description (here the user describes him/herself, the services he/she offers, etc) : string (nullable)

Post
- id
- title : string (not nullable)
- body : string (not nullable)

Comment
- id
- post_id
- user_id
- text : string (not nullable)
- date : date (not nullable)
