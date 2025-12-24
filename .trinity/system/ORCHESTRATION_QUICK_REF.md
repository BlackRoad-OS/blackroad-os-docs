# 🌈 Template Orchestration Quick Reference

**Fast guide to using the Light Trinity Template Orchestration System**

---

## 📋 Command Summary

```bash
# List all templates
.trinity/system/orchestrate-template.sh list

# List templates by category
.trinity/system/orchestrate-template.sh list world

# Create a new template
.trinity/system/orchestrate-template.sh create <name> <category>

# Update an existing template
.trinity/system/orchestrate-template.sh update <name> "description of changes"

# Deploy a template
.trinity/system/orchestrate-template.sh deploy <name> <platform>

# Check template status
.trinity/system/orchestrate-template.sh status <name>

# Run complete workflow (create → edit → deploy)
.trinity/system/orchestrate-template.sh workflow <name> <category>

# Get help
.trinity/system/orchestrate-template.sh help
```

---

## 🚀 Common Operations

### Create a New World Template

```bash
# Step 1: Create the template
.trinity/system/orchestrate-template.sh create blackroad-mars world

# Step 2: Edit the template
# File location: .trinity/redlight/templates/blackroad-mars.html

# Step 3: Deploy to Cloudflare
.trinity/system/orchestrate-template.sh deploy blackroad-mars cloudflare
```

### Update an Existing Template

```bash
# Step 1: Edit the template file
# .trinity/redlight/templates/blackroad-earth.html

# Step 2: Log the update
.trinity/system/orchestrate-template.sh update blackroad-earth "Added rainforest biome"

# Step 3: Redeploy
.trinity/system/orchestrate-template.sh deploy blackroad-earth cloudflare
```

### Run Complete Workflow

```bash
# This will create, pause for editing, then deploy
.trinity/system/orchestrate-template.sh workflow blackroad-jupiter world

# When prompted:
# 1. Edit: .trinity/redlight/templates/blackroad-jupiter.html
# 2. Press Enter to continue deployment
```

---

## 🎨 Template Categories

- **world** - 3D interactive worlds (Earth, Mars, planets, metaverse)
- **website** - Landing pages, dashboards, web apps
- **animation** - Motion graphics, visual effects, particles
- **design** - Design systems, component libraries
- **game** - Interactive games and experiences
- **app** - Web applications
- **visual** - Visual effects, shaders

---

## 🚀 Deployment Platforms

- **cloudflare** - Cloudflare Pages (default, recommended)
- **railway** - Railway.app
- **github** - GitHub Pages
- **vercel** - Vercel
- **netlify** - Netlify

---

## 📊 Check Template Status

```bash
.trinity/system/orchestrate-template.sh status blackroad-earth
```

**Shows:**
- ✅ Template exists (with size and modification date)
- 📁 File path
- 🟢 GreenLight task status
- 🟡 YellowLight deployment status

---

## 🌈 What Happens Behind the Scenes

### When you CREATE:
1. 🟢 **GreenLight** creates a task to track the work
2. 🔴 **RedLight** creates the template file
3. 🟢 **GreenLight** logs the creation to memory system

### When you DEPLOY:
1. 🟢 **GreenLight** updates deployment status
2. 🟡 **YellowLight** deploys to the platform
3. 🔴 **RedLight** logs the deployment
4. 🟢 **GreenLight** marks task complete
5. 🟡 **YellowLight** sets up health monitoring

---

## 📝 Examples

### Example 1: Solar System Templates

```bash
# Create templates for all planets
for planet in mars venus jupiter saturn; do
    .trinity/system/orchestrate-template.sh create blackroad-${planet} world
done

# Edit each template...

# Deploy all
for planet in mars venus jupiter saturn; do
    .trinity/system/orchestrate-template.sh deploy blackroad-${planet} cloudflare
done
```

### Example 2: Animation Library

```bash
# Create animation templates
.trinity/system/orchestrate-template.sh create blackroad-particles animation
.trinity/system/orchestrate-template.sh create blackroad-waves animation
.trinity/system/orchestrate-template.sh create blackroad-galaxy animation

# List all animation templates
.trinity/system/orchestrate-template.sh list animation
```

### Example 3: Check All Statuses

```bash
# Check status of multiple templates
for template in blackroad-earth blackroad-mars blackroad-metaverse; do
    echo "=== $template ==="
    .trinity/system/orchestrate-template.sh status $template
    echo
done
```

---

## 🔧 Manual Operations (Advanced)

If you need more control, you can use the individual Light systems directly:

### RedLight Only

```bash
# Source RedLight templates
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Create template
rl_template_create "blackroad-mars" "world" "Interactive Mars globe"

# Deploy template
rl_template_deploy "blackroad-mars" "https://mars.blackroad.io" "cloudflare"
```

### GreenLight Only

```bash
# Source GreenLight templates
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Create task
gl_feature "blackroad-mars" "Create Mars template" "🍖" "⭐"

# Update progress
gl_wip "blackroad-mars" "Adding terrain features" "🌸" "👉"

# Mark complete
gl_phase_done "deployment" "Mars Template" "Deployed successfully" "🌌"
```

### YellowLight Only

```bash
# Source YellowLight templates
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Log deployment
yl_pages_deploy "blackroad-mars" "https://mars.blackroad.io" "v1.0.0"

# Set up monitoring
yl_health_check "mars.blackroad.io" "https://mars.blackroad.io" "300"
```

---

## 🐛 Troubleshooting

### Template Not Found

```bash
# List all templates to verify name
.trinity/system/orchestrate-template.sh list

# Check if file exists
ls -la .trinity/redlight/templates/blackroad-*.html
```

### Deployment Failed

```bash
# For Cloudflare: Check if Wrangler is installed
wrangler --version

# Install if needed
npm install -g wrangler

# Check authentication
wrangler whoami
```

### Script Not Executable

```bash
# Make script executable
chmod +x .trinity/system/orchestrate-template.sh
```

---

## 📚 Documentation

- **Complete Guide**: `.trinity/system/TEMPLATE_ORCHESTRATION.md`
- **Trinity Overview**: `.trinity/README.md`
- **RedLight Docs**: `.trinity/redlight/docs/REDLIGHT_TEMPLATE_SYSTEM.md`
- **GreenLight Docs**: `.trinity/greenlight/docs/GREENLIGHT_CLAUDE_QUICK_REFERENCE.md`
- **YellowLight Docs**: `.trinity/yellowlight/docs/YELLOWLIGHT_INFRASTRUCTURE_SYSTEM.md`

---

## 🎯 Quick Tips

1. **Always use orchestration script** - It coordinates all three lights automatically
2. **List first** - Check existing templates before creating new ones
3. **Check status** - Verify template state before deploying
4. **Test locally** - Open template in browser before deploying
5. **Name consistently** - Use pattern: `blackroad-{name}.html`

---

## 🌟 The Three Lights

- 🔴 **RedLight** - Template creation, design, assets
- 🟢 **GreenLight** - Project tracking, coordination, memory
- 🟡 **YellowLight** - Infrastructure, deployment, monitoring

**Together: Complete template lifecycle management** 🌈

---

**Created:** December 24, 2025  
**For:** BlackRoad OS Template Orchestration System  
**Version:** 1.0.0
