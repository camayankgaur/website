# Mayank Gaur - Professional Portfolio

This is a static HTML5 portfolio website optimized for GitHub Pages.

## 🚀 How to Deploy to GitHub Pages

1.  **Create a Repository:**
    * Go to GitHub and create a new public repository named `mayank-portfolio` (or `username.github.io`).

2.  **Upload Files:**
    * Upload all files and folders from this directory to the repository.

3.  **Activate Pages:**
    * Go to Repository **Settings** > **Pages**.
    * Under **Source**, select `Deploy from a branch`.
    * Select `main` (or `master`) branch and `/ (root)` folder.
    * Click **Save**.

4.  **Add Laws File:**
    * Ensure the `DIFC_CIL_2010_Guide.html` file is placed in the `laws/` folder and renamed to `difc-cil-2010.html`.

## 📝 How to Update the Blog

You do not need to edit HTML code to add blog posts.

1.  Open `data/blog.json`.
2.  Add a new object to the list:
    ```json
    {
      "id": 3,
      "title": "New Post Title",
      "date": "Current Date",
      "summary": "Short summary...",
      "content": "<p>Your full HTML content here...</p>"
    }
    ```
3.  Commit the changes to GitHub. The site will update automatically.

## 📧 Contact Form

To make the contact form work:
1.  Register at [Formspree](https://formspree.io).
2.  Create a new form.
3.  Copy the Form ID.
4.  Edit `contact.html` and replace `YOUR_FORMSPREE_ID` with your actual ID.
