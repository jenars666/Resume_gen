# 📹 How to Add Your Demo Video to README

## Your Video File
**Location**: `C:\Users\USER\Desktop\Recording 2025-11-02 162546.mp4`

---

## Method 1: Upload via GitHub Issues (Recommended)

This is the easiest way to host your video on GitHub:

### Steps:

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/yourusername/prompter-to-pro`

2. **Open Issues tab**
   - Click on "Issues" in the top menu

3. **Create a new issue**
   - Click the green "New issue" button

4. **Upload your video**
   - Give it a title like "Demo Video Upload"
   - In the description area, **drag and drop** your video file:
     `Recording 2025-11-02 162546.mp4`
   - Wait for the upload to complete
   - GitHub will generate a URL like:
     ```
     https://github.com/user-attachments/assets/abc123def456...
     ```

5. **Copy the URL**
   - Copy the generated URL from the issue description

6. **Update README.md**
   - Replace line 7 in README.md:
   ```markdown
   https://github.com/user-attachments/assets/your-video-id-here
   ```
   - With your actual video URL

7. **Close or delete the issue** (optional)
   - You can close the issue after copying the URL
   - The video will remain hosted

---

## Method 2: Upload to Repository

### Steps:

1. **Create a media folder**
   ```bash
   mkdir -p public/demo
   ```

2. **Copy your video**
   - Copy `Recording 2025-11-02 162546.mp4` to `public/demo/`
   - Rename it to something simpler: `demo.mp4`

3. **Update README.md**
   ```markdown
   ## 🎥 Demo
   
   ![Demo Video](./public/demo/demo.mp4)
   ```

4. **Commit and push**
   ```bash
   git add public/demo/demo.mp4
   git add README.md
   git commit -m "Add demo video"
   git push
   ```

**Note**: This method increases repository size. GitHub has a 100MB file limit.

---

## Method 3: Upload to External Service

### YouTube (Public/Unlisted)

1. **Upload to YouTube**
   - Go to: https://studio.youtube.com
   - Click "Create" → "Upload videos"
   - Upload `Recording 2025-11-02 162546.mp4`
   - Set visibility to "Unlisted" (not searchable but accessible via link)

2. **Get embed code**
   - Click "Share" → "Embed"
   - Copy the embed code

3. **Update README.md**
   ```markdown
   ## 🎥 Demo
   
   [![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
   ```

### Vimeo

1. **Upload to Vimeo**
   - Go to: https://vimeo.com/upload
   - Upload your video

2. **Get link**
   - Copy the video URL

3. **Update README.md**
   ```markdown
   ## 🎥 Demo
   
   [Watch Demo](https://vimeo.com/your-video-id)
   ```

### Google Drive

1. **Upload to Google Drive**
   - Upload `Recording 2025-11-02 162546.mp4`
   - Right-click → "Get link"
   - Set to "Anyone with the link"

2. **Update README.md**
   ```markdown
   ## 🎥 Demo
   
   [Watch Demo Video](https://drive.google.com/file/d/YOUR_FILE_ID/view)
   ```

---

## Method 4: Convert to GIF (Alternative)

If you want a GIF instead of video:

### Using Online Tool:

1. **Go to**: https://cloudconvert.com/mp4-to-gif
2. **Upload** your video
3. **Configure**:
   - Set FPS to 10-15 for smaller size
   - Set quality to medium
4. **Download** the GIF
5. **Upload to GitHub**:
   - Add to `public/demo/demo.gif`
6. **Update README.md**:
   ```markdown
   ## 🎥 Demo
   
   ![Demo](./public/demo/demo.gif)
   ```

---

## Recommended Approach

**Use Method 1 (GitHub Issues)** because:
- ✅ Free hosting
- ✅ No repository size increase
- ✅ Easy to implement
- ✅ Works directly in GitHub
- ✅ No external dependencies

---

## After Uploading

Once you've added the video URL to README.md:

1. **Commit the changes**
   ```bash
   git add README.md
   git commit -m "Add demo video to README"
   git push
   ```

2. **Verify**
   - Go to your GitHub repository
   - Check that the video displays correctly in README

---

## Video Best Practices

For best results:
- ✅ Keep video under 2 minutes
- ✅ Show key features clearly
- ✅ Use good lighting/screen recording
- ✅ Add captions if possible
- ✅ Compress if file is too large

---

## Need Help?

If you encounter issues:
1. Check file size (GitHub limit: 100MB for repo, 10MB for issues)
2. Try compressing the video
3. Use an external hosting service
4. Convert to GIF for smaller size

---

**Your current video**: `Recording 2025-11-02 162546.mp4`  
**Recommended method**: Upload via GitHub Issues (Method 1)
