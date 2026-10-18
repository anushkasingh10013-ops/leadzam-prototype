# LeadZam Signup UX Redesign

## Project Overview

This project is a focused UI/UX improvement for the LeadZam signup experience. It includes a responsive React and TypeScript prototype designed to make account creation clearer and easier for new users.

The redesign focuses on reducing unnecessary friction while keeping the signup form simple and accessible.

## Problem Statement

Signup forms can create unnecessary friction when users are unsure which information is required and which information can be provided later.

This prototype makes required fields clear and treats the company name as optional, helping users understand what they need to complete before creating an account.

*Note: This describes the design decision implemented in this prototype, not a verified claim about LeadZam's original signup requirements.*

## Proposed Solution

- Clearly labeled required fields for full name and work email.
- An optional company name field with helpful explanatory text.
- Form validation with understandable error messages.
- A success state after valid form submission.
- Responsive layout for desktop and mobile screens.
- A simple interface with a clear primary action.

## Key Features

- React with TypeScript
- Interactive signup form
- Required-field and email validation
- Validation and success states
- Responsive CSS styling

## Technology Stack

- React
- TypeScript
- Vite
- CSS
- Git and GitHub

## Run Locally

### Prerequisites

Install Node.js and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anushkasingh10013-ops/leadzam-prototype.git
   ```

2. Open the project folder:

   ```bash
   cd leadzam-prototype
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Testing Checklist

- [ ] Submit the form with empty required fields.
- [ ] Enter an invalid email address.
- [ ] Submit valid name and email details.
- [ ] Leave the optional company name blank.
- [ ] Check the layout on desktop and mobile.
- [ ] Confirm that error and success messages are understandable.

## Project Scope

This is a frontend prototype for demonstrating a proposed signup experience. It does not implement real account creation, backend integration, or persistent user data storage.

## Author

Anushka Singh

GitHub: [anushkasingh10013-ops](https://github.com/anushkasingh10013-ops)

## AI Usage Notes

### 1. AI Tools Used
I used ChatGPT to support my UI/UX audit, explore design improvements, assist with React and TypeScript implementation, troubleshoot development issues, and prepare project documentation.

### 2. How AI Helped
AI helped me organize my audit findings into three improvement areas: clearer onboarding guidance for new users, an AI-powered help assistant, and a simpler signup experience with an optional company name field.

It also assisted me in developing the React signup prototype, including form validation, error and success states, responsive styling, and documentation. I reviewed the suggestions and adapted them to fit the scope of my assignment.

### 3. One AI Suggestion I Improved
AI helped me explore ways to simplify the signup form. I focused the redesign on making the company name optional while keeping full name and work email required. I chose this approach because students, individual users, and people exploring a trial may not have company information available. This keeps the form focused on the essential information for the proposed experience.

### 4. What I Personally Verified
I personally explored the LeadZam signup page and dashboard and used my observations to identify improvement opportunities. I tested the prototype in the browser to verify required-field validation, invalid email handling, successful form submission, and the mobile layout.

I also checked that the project files were uploaded to GitHub. I treated AI-generated suggestions as assistance rather than verified facts and distinguished proposed improvements from observed issues. The prototype is a frontend demonstration and does not create real accounts or connect to a production backend.
