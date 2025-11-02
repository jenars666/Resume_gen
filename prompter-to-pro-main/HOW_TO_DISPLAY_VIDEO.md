# 🎥 How to Display Video in GitHub README

## Current Status

✅ Video file is in: `assets/demo.mp4`  
✅ README has video section ready  
⚠️ Video needs to be uploaded to GitHub for inline playback

---

## Why Local Path Doesn't Work

GitHub README files **cannot play videos directly from repository files**. The path:
```
E:\prompter-to-pro-main\prompter-to-pro-main\assets\demo.mp4
```

This is a **local Windows path** and won't work on GitHub.

---

## ✅ Solution: Upload Video to GitHub

### Method 1: GitHub Issues Upload (RECOMMENDED)

This is the **easiest and best** method:

#### Steps:

1. **Push your code to GitHub first**
   ```bash
   git add .
   git commit -m "Add demo video"
   git push
   ```

2. **Go to your GitHub repository**
   - Navigate to: `https://github.com/yourusername/prompter-to-pro`

3. **Open Issues**
   - Click "Issues" tab
   - Click "New issue"

4. **Upload Video**
   - Give it a title: "Demo Video Upload"
   - In the description box, **drag and drop** your video:
     `assets/demo.mp4`
   - Wait for upload to complete
   - GitHub will generate a URL like:
     ```
     https://github.com/user-attachments/assets/abc123def456.mp4
     ```

5. **Copy the URL**
   - Right-click the video in the issue
   - Copy the URL

6. **Update README.md**
   - Open `README.md`
   - Find line 10:
     ```html
     <video src="https://github.com/user-attachments/assets/demo.mp4" width="100%" controls>
     ```
   - Replace with your actual URL:
     ```html
     <video src="https://github.com/user-attachments/assets/abc123def456.mp4" width="100%" controls>
     ```

7. **Commit and Push**
   ```bash
   git add README.md
   git commit -m "Update video URL"
   git push
   ```

8. **Close the issue** (optional)
   - The video will remain hosted even if you close/delete the issue

---

## Method 2: Convert to GIF

If you want the video to display inline without uploading:

### Steps:

1. **Convert video to GIF**
   - Go to: https://cloudconvert.com/mp4-to-gif
   - Upload `assets/demo.mp4`
   - Set FPS: 10-15
   - Set quality: Medium
   - Download the GIF

2. **Save GIF**
   - Save as `assets/demo.gif`

3. **Update README**
   ```markdown
   ## 🎥 Demo
   
   ![Demo](./assets/demo.gif)
   ```

4. **Commit**
   ```bash
   git add assets/demo.gif
   git add README.md
   git commit -m "Add demo GIF"
   git push
   ```

**Pros**: Displays inline immediately  
**Cons**: Lower quality, larger file size

---

## Method 3: YouTube Upload

### Steps:

1. **Upload to YouTube**
   - Go to: https://studio.youtube.com
   - Upload `assets/demo.mp4`
   - Set visibility: "Unlisted" (not searchable but accessible via link)

2. **Get Video ID**
   - Your video URL: `https://www.youtube.com/watch?v=ABC123`
   - Video ID: `ABC123`

3. **Update README**
   ```markdown
   ## 🎥 Demo
   
   [![Demo Video](https://img.youtube.com/vi/ABC123/maxresdefault.jpg)](https://www.youtube.com/watch?v=ABC123)
   
   Click the image above to watch the demo video.
   ```

4. **Commit**
   ```bash
   git add README.md
   git commit -m "Add YouTube demo video"
   git push
   ```

**Pros**: Professional, unlimited size, good quality  
**Cons**: Requires YouTube account

---

## Method 4: Relative Link (Download Only)

If you just want users to download the video:

### Current Setup:

```markdown
**Or download**: [Demo Video (MP4)](./assets/demo.mp4)
```

This is **already in your README** and will work once pushed to GitHub.

**Pros**: Simple, works immediately  
**Cons**: Users must download to watch

---

## 🎯 Recommended Approach

**For Best Results**:

1. **Use Method 1 (GitHub Issues Upload)**
   - Free hosting
   - Inline video playback
   - No external dependencies
   - Works perfectly in README

2. **Keep the download link** as backup:
   ```markdown
   **Or download**: [Demo Video (MP4)](./assets/demo.mp4)
   ```

---

## 📝 Current README Setup

Your README currently has:

```html
<div align="center">
  <video src="https://github.com/user-attachments/assets/demo.mp4" width="100%" controls>
    Your browser does not support the video tag.
  </video>
</div>

**Or download**: [Demo Video (MP4)](./assets/demo.mp4)
```

**What to do**:
1. Follow Method 1 above
2. Replace the URL in the `<video src="...">` tag
3. Push to GitHub
4. Video will play inline! 🎉

---

## ⚠️ Important Notes

### File Size Limits

| Method | Size Limit |
|--------|------------|
| GitHub Issues | 10MB |
| Git Repository | 100MB |
| Git LFS | 2GB |
| YouTube | Unlimited |

### If Your Video is Too Large

**Check size**:
```bash
Get-Item "assets\demo.mp4" | Select-Object Length
```

**If > 10MB for GitHub Issues**:
- Compress using HandBrake
- Reduce resolution to 720p
- Lower bitrate
- Or use YouTube instead

---

## 🎬 Example Final Result

After following Method 1, your README will show:

```
🎥 Demo
[▶️ Video Player with Controls]
Or download: Demo Video (MP4)
```

Users can:
- ✅ Watch inline on GitHub
- ✅ Download if needed
- ✅ See all features in action

---

## 🚀 Quick Start

**Right now, do this**:

```bash
# 1. Commit everything
git add .
git commit -m "Add demo video and documentation"
git push

# 2. Go to GitHub Issues
# 3. Upload assets/demo.mp4
# 4. Copy the generated URL
# 5. Update README.md line 10 with the URL
# 6. Commit and push again

git add README.md
git commit -m "Update video URL"
git push
```

**Done!** Your video will display in the README! 🎉

---

## Need Help?

See `VIDEO_UPLOAD_GUIDE.md` for more detailed instructions.
