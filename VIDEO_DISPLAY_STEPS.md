# 🎥 Step-by-Step: Display Video in GitHub README

## Current Situation

✅ Video uploaded to GitHub: `prompter-to-pro-main/assets/demo.mp4`  
✅ File size: **86.8 MB**  
✅ Stored with: **Git LFS**  
❌ Cannot display directly in README (file too large)

---

## ✅ Solution: Upload via GitHub Issues

Follow these exact steps:

### Step 1: Go to Your Repository
Navigate to: `https://github.com/jenars666/Resume_gen` (or your repo URL)

### Step 2: Open Issues
- Click the **"Issues"** tab at the top
- Click the green **"New issue"** button

### Step 3: Create a Temporary Issue
- **Title**: Type anything (e.g., "Video Upload")
- **Description**: Leave empty for now

### Step 4: Upload Your Video
In the description box:
1. Click inside the text area
2. **Drag and drop** your video file from:
   ```
   E:\prompter-to-pro-main\prompter-to-pro-main\assets\demo.mp4
   ```
   OR
3. Navigate to the file and select it

### Step 5: Wait for Upload
- You'll see: "Uploading demo.mp4..."
- Wait until it completes (may take 1-2 minutes for 86.8 MB)
- GitHub will show a video player in the issue

### Step 6: Copy the Video URL
Once uploaded, you'll see the video in the issue description.

**Method A - Copy from markdown:**
- GitHub generates markdown like:
  ```
  https://github.com/user-attachments/assets/abc123def456-789.mp4
  ```
- Copy this entire URL

**Method B - Right-click video:**
- Right-click on the video player
- Select "Copy video address"
- This gives you the direct URL

### Step 7: Update README.md
1. Open `README.md` in your editor
2. Find line 9:
   ```
   https://github.com/user-attachments/assets/REPLACE_WITH_YOUR_VIDEO_ID
   ```
3. Replace with your copied URL:
   ```
   https://github.com/user-attachments/assets/abc123def456-789.mp4
   ```

### Step 8: Commit and Push
```bash
git add README.md
git commit -m "Update demo video URL"
git push
```

### Step 9: Close the Issue (Optional)
- You can close or delete the issue
- The video will remain hosted by GitHub
- The URL will continue to work

### Step 10: Verify
- Go to your GitHub repo
- View the README
- The video should now play inline! 🎉

---

## 📸 Visual Guide

### What You'll See:

**In GitHub Issues:**
```
┌─────────────────────────────────────┐
│ New Issue                           │
├─────────────────────────────────────┤
│ Title: Video Upload                 │
│                                     │
│ Description:                        │
│ [Drag video here or click to upload]│
│                                     │
│ After upload:                       │
│ ▶️ [Video Player]                   │
│ https://github.com/user-attachments/│
│ assets/abc123.mp4                   │
└─────────────────────────────────────┘
```

**In README (after update):**
```
🎥 Demo

▶️ [Inline Video Player with Controls]
   Play/Pause | Volume | Fullscreen

Or download: Demo Video (MP4) - 86.8 MB
```

---

## ⚡ Quick Commands

```bash
# After getting the URL from GitHub Issues:

# 1. Open README
code README.md

# 2. Replace line 9 with your URL

# 3. Save and commit
git add README.md
git commit -m "Add demo video URL"
git push
```

---

## 🎯 Example URLs

### Before (Current):
```
https://github.com/user-attachments/assets/REPLACE_WITH_YOUR_VIDEO_ID
```

### After (Your actual URL will look like):
```
https://github.com/user-attachments/assets/a1b2c3d4-e5f6-7890-abcd-ef1234567890.mp4
```

or

```
https://github.com/jenars666/Resume_gen/assets/123456789/abc-def-ghi.mp4
```

---

## ❓ Troubleshooting

### Issue: Upload fails
**Solution**: 
- File might be too large for Issues (10MB limit)
- Compress the video first:
  1. Use HandBrake or online compressor
  2. Reduce to 720p
  3. Target size: under 10MB

### Issue: Video doesn't play
**Solution**:
- Make sure you copied the full URL
- URL should end with `.mp4`
- URL should start with `https://github.com/`

### Issue: Can't find the video file
**Location**:
```
E:\prompter-to-pro-main\prompter-to-pro-main\assets\demo.mp4
```

---

## 🎬 Alternative: Compress Video First

If the 86.8 MB file is too large for GitHub Issues:

### Option 1: Online Compression
1. Go to: https://www.freeconvert.com/video-compressor
2. Upload `demo.mp4`
3. Set quality: Medium (720p)
4. Target size: 8-10 MB
5. Download compressed version
6. Upload to GitHub Issues

### Option 2: HandBrake (Desktop App)
1. Download: https://handbrake.fr/
2. Open `demo.mp4`
3. Preset: "Fast 720p30"
4. Start encode
5. Upload compressed version

---

## 🎉 Final Result

After following these steps, your README will show:

```markdown
## 🎥 Demo

https://github.com/jenars666/Resume_gen/assets/123/your-video.mp4

Or download: Demo Video (MP4) - 86.8 MB
```

And visitors will see:
- ✅ Inline video player
- ✅ Play/pause controls
- ✅ Volume control
- ✅ Fullscreen option
- ✅ Download link as backup

---

## 📝 Summary

1. ✅ Go to GitHub Issues
2. ✅ Create new issue
3. ✅ Upload `demo.mp4`
4. ✅ Copy the generated URL
5. ✅ Update README.md line 9
6. ✅ Commit and push
7. ✅ Video displays inline!

**Time needed**: 5 minutes  
**Difficulty**: Easy  
**Result**: Professional video showcase! 🚀
