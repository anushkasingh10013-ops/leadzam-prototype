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
