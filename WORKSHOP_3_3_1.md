# Guidelines for Domain Modeling Exercise

In this part of the workshop, each team will pick a domain and then collaborate on building a shared mental model and documenting the domain.

- One person takes the role of domain expert
- One person takes the role of main interviewer (although everyone can ask questions)
- One person documents the domain (although everyone can contribute)

The interviewer(s) will ask the domain expert questions in order to understand the domain and become domain experts themselves.

The goal is to:
- Document the domain using AND and OR, etc
- And at the same time, develop a shared mental model and shared language among the group

# How to interview

## Listen to and learn from the experts

- Don't impose your own ideas
- Avoid yes/no questions
- If you hear "it depends", drill deeper

## Disagreement between experts is OK.

- The design process is about getting everyone on the same page!

# How to model a workflow

## What is needed for the workflow input?

- What data is from the triggering event itself
- What data is from the current state of the system? E.g. loaded from storage?
- What other data is needed?

## What is the output of the workflow?

- What events are needed for broadcast to downstream systems?
- What data should be saved to storage?

## How does the state of the system change?

- Does data need to be loaded, changed, and resaved?

## What are the side effects? (Things that must be done but are internal to the domain)
