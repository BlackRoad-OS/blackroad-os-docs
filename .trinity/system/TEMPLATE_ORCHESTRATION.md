# 🌈 TEMPLATE ORCHESTRATION SYSTEM
## Unified RedLight, GreenLight, and YellowLight Workflow
### Version 1.0 — December 24, 2025

**The complete orchestration framework for BlackRoad OS template lifecycle management.**

---

## **OVERVIEW**

The Template Orchestration System coordinates all three lights of the Light Trinity to manage the complete lifecycle of templates from creation to deployment:

- **🔴 RedLight** — Template creation, design, and asset management
- **🟢 GreenLight** — Project tracking, workflow coordination, and state management
- **🟡 YellowLight** — Infrastructure deployment, CI/CD, and monitoring

Together, these three lights orchestrate a seamless workflow for building, tracking, and deploying visual experiences across the BlackRoad OS ecosystem.

---

## **ORCHESTRATION WORKFLOW**

### The Complete Template Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE LIFECYCLE                        │
└─────────────────────────────────────────────────────────────┘

1. 🟢 PLAN (GreenLight)
   ├─ Create GreenLight task
   ├─ Define requirements
   ├─ Set priority and effort
   └─ Assign to agent/team

2. 🔴 CREATE (RedLight)
   ├─ Choose template category
   ├─ Create or copy template
   ├─ Design and implement features
   └─ Log creation to memory

3. 🟢 TRACK (GreenLight)
   ├─ Update work-in-progress
   ├─ Report progress
   ├─ Log milestones
   └─ Request reviews

4. 🔴 TEST (RedLight)
   ├─ Performance testing
   ├─ Browser compatibility
   ├─ Accessibility checks
   └─ Analytics integration

5. 🟡 DEPLOY (YellowLight)
   ├─ Select platform
   ├─ Deploy template
   ├─ Configure domain
   └─ Set up monitoring

6. 🟢 COMPLETE (GreenLight)
   ├─ Mark task done
   ├─ Document learnings
   ├─ Share with team
   └─ Archive task

7. 🟡 MONITOR (YellowLight)
   ├─ Health checks
   ├─ Performance metrics
   ├─ Error tracking
   └─ Usage analytics
```

---

## **ORCHESTRATION PATTERNS**

### Pattern 1: Create and Deploy World Template

```bash
#!/bin/bash
# Complete workflow for creating and deploying a 3D world template

# 1. GreenLight: Announce the work
source ~/.trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_announce "cece" "Mars World Template" \
    "1) Copy Earth template 2) Add Mars features 3) Deploy" \
    "Create interactive Mars experience"

# 2. RedLight: Create the template
source ~/.trinity/redlight/scripts/memory-redlight-templates.sh
cp .trinity/redlight/templates/blackroad-earth.html \
   .trinity/redlight/templates/blackroad-mars.html

rl_template_create "blackroad-mars" "world" \
    "Interactive Mars globe with rover missions and terrain"

# 3. GreenLight: Update progress
gl_progress "cece" "Mars template created from Earth base" \
    "Adding Mars-specific features (terrain, rovers, atmosphere)"

# 4. RedLight: Add features (edit the HTML file with Mars-specific content)
# ... make changes to blackroad-mars.html ...

rl_template_update "blackroad-mars" \
    "Added Olympus Mons, Valles Marineris, polar caps, red atmosphere"

# 5. GreenLight: Report completion
gl_phase_done "implementation" "Mars Template" \
    "All features complete: terrain, rovers, atmosphere, 60 FPS" "🌌"

# 6. YellowLight: Deploy to platform
source ~/.trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Deploy to Cloudflare Pages
wrangler pages deploy .trinity/redlight/templates/blackroad-mars.html \
    --project-name=mars-blackroad

yl_pages_deploy "blackroad-mars" \
    "https://mars.blackroad.io" \
    "v1.0.0"

# 7. RedLight: Log deployment
rl_template_deploy "blackroad-mars" \
    "https://mars.blackroad.io" \
    "cloudflare"

# 8. GreenLight: Mark complete
gl_deploy "mars.blackroad.io" \
    "https://mars.blackroad.io" \
    "Mars template deployed and live"

# 9. YellowLight: Set up monitoring
yl_health_check "mars.blackroad.io" \
    "https://mars.blackroad.io" \
    "300"
```

### Pattern 2: Update Existing Template

```bash
#!/bin/bash
# Workflow for updating an existing deployed template

# 1. GreenLight: Create task for update
gl_feature "Update Earth Template" \
    "Add new biome layer for rainforests" \
    "🥄" "📌"

# 2. RedLight: Update template
# ... make changes to blackroad-earth.html ...

rl_template_update "blackroad-earth" \
    "Added rainforest biome with biodiversity indicators"

# 3. RedLight: Test performance
rl_performance_metrics "blackroad-earth" \
    "60" "1.2" "180"

# 4. YellowLight: Deploy update
wrangler pages deploy .trinity/redlight/templates/blackroad-earth.html \
    --project-name=earth-blackroad

yl_deployment_succeeded "blackroad-earth" \
    "cloudflare" \
    "https://earth.blackroad.io" \
    "v1.1.0" \
    "production"

# 5. GreenLight: Complete task
gl_phase_done "deployment" "Earth Template Update" \
    "Rainforest biome deployed, performance maintained at 60 FPS" "🌌"
```

### Pattern 3: Multi-Template Campaign

```bash
#!/bin/bash
# Orchestrate creation of multiple related templates

TEMPLATES=("mars" "jupiter" "saturn" "venus")

# 1. GreenLight: Announce campaign
gl_announce "cece" "Solar System Template Campaign" \
    "Create interactive templates for 4 planets" \
    "Complete solar system experience" "🌍" "🎨"

for planet in "${TEMPLATES[@]}"; do
    # 2. GreenLight: Create individual tasks
    gl_feature "blackroad-${planet}" \
        "Interactive ${planet^} world template" \
        "🍖" "⭐"
    
    # 3. RedLight: Create template
    cp .trinity/redlight/templates/blackroad-world-template.html \
       .trinity/redlight/templates/blackroad-${planet}.html
    
    rl_template_create "blackroad-${planet}" "world" \
        "Interactive ${planet^} globe with planetary features"
    
    # 4. GreenLight: Track progress
    gl_wip "blackroad-${planet}" \
        "Implementing ${planet^}-specific features" \
        "🌸" "👉"
    
    # ... customize template for planet ...
    
    # 5. YellowLight: Deploy
    wrangler pages deploy .trinity/redlight/templates/blackroad-${planet}.html \
        --project-name=${planet}-blackroad
    
    yl_pages_deploy "blackroad-${planet}" \
        "https://${planet}.blackroad.io" \
        "v1.0.0"
    
    # 6. RedLight: Log deployment
    rl_template_deploy "blackroad-${planet}" \
        "https://${planet}.blackroad.io" \
        "cloudflare"
    
    # 7. GreenLight: Mark done
    gl_phase_done "deployment" "${planet^} Template" \
        "${planet^} deployed to https://${planet}.blackroad.io" "🌌"
done

# 8. GreenLight: Complete campaign
gl_phase_done "campaign" "Solar System Templates" \
    "All 4 planet templates created and deployed successfully" "🌌"
```

---

## **ORCHESTRATION SCRIPTS**

### Master Orchestration Script

Create this as `.trinity/system/orchestrate-template.sh`:

```bash
#!/bin/bash
# Template Orchestration Master Script
# Coordinates RedLight, GreenLight, and YellowLight for template lifecycle

set -e

# Source all Light systems
source ~/.trinity/redlight/scripts/memory-redlight-templates.sh
source ~/.trinity/greenlight/scripts/memory-greenlight-templates.sh
source ~/.trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Usage
show_usage() {
    cat << EOF
🌈 Template Orchestration System

Usage: orchestrate-template.sh <command> [options]

Commands:
  create <name> <category>        Create new template
  update <name> <changes>         Update existing template
  deploy <name> <platform>        Deploy template to platform
  status <name>                   Show template status
  workflow <name>                 Run complete workflow
  campaign <prefix> <count>       Create multiple templates

Examples:
  orchestrate-template.sh create blackroad-mars world
  orchestrate-template.sh deploy blackroad-earth cloudflare
  orchestrate-template.sh workflow blackroad-jupiter
  orchestrate-template.sh campaign planet 4

Platforms: cloudflare, railway, github, vercel
Categories: world, website, animation, design, game, app
EOF
}

# Main orchestration function
orchestrate_create() {
    local template_name="$1"
    local category="${2:-world}"
    
    echo -e "${GREEN}🌈 Starting template orchestration for: $template_name${NC}"
    
    # Step 1: GreenLight - Create task
    echo -e "${GREEN}🟢 GreenLight: Creating task...${NC}"
    gl_feature "$template_name" "Create $category template" "🍖" "⭐"
    
    # Step 2: RedLight - Create template
    echo -e "${RED}🔴 RedLight: Creating template...${NC}"
    cp .trinity/redlight/templates/blackroad-world-template.html \
       .trinity/redlight/templates/${template_name}.html
    
    rl_template_create "$template_name" "$category" \
        "New $category template: $template_name"
    
    # Step 3: GreenLight - Update progress
    echo -e "${GREEN}🟢 GreenLight: Tracking progress...${NC}"
    gl_wip "$template_name" "Template created, ready for customization" "🌸" "👉"
    
    echo -e "${GREEN}✅ Template orchestration complete!${NC}"
    echo -e "Next steps:"
    echo -e "  1. Edit: .trinity/redlight/templates/${template_name}.html"
    echo -e "  2. Deploy: orchestrate-template.sh deploy $template_name cloudflare"
}

orchestrate_deploy() {
    local template_name="$1"
    local platform="${2:-cloudflare}"
    local url="https://${template_name##*-}.blackroad.io"
    
    echo -e "${YELLOW}🟡 Starting deployment orchestration...${NC}"
    
    # Step 1: GreenLight - Update status
    echo -e "${GREEN}🟢 GreenLight: Updating deployment status...${NC}"
    gl_progress "cece" "Deploying $template_name to $platform" \
        "Configuring deployment and monitoring"
    
    # Step 2: YellowLight - Deploy
    echo -e "${YELLOW}🟡 YellowLight: Deploying to $platform...${NC}"
    
    if [ "$platform" = "cloudflare" ]; then
        wrangler pages deploy .trinity/redlight/templates/${template_name}.html \
            --project-name=${template_name}
    fi
    
    yl_pages_deploy "$template_name" "$url" "v1.0.0"
    
    # Step 3: RedLight - Log deployment
    echo -e "${RED}🔴 RedLight: Logging deployment...${NC}"
    rl_template_deploy "$template_name" "$url" "$platform"
    
    # Step 4: GreenLight - Mark complete
    echo -e "${GREEN}🟢 GreenLight: Marking complete...${NC}"
    gl_deploy "$template_name" "$url" "Deployed to $platform"
    
    # Step 5: YellowLight - Set up monitoring
    echo -e "${YELLOW}🟡 YellowLight: Setting up monitoring...${NC}"
    yl_health_check "$template_name" "$url" "300"
    
    echo -e "${GREEN}✅ Deployment orchestration complete!${NC}"
    echo -e "Template live at: $url"
}

orchestrate_workflow() {
    local template_name="$1"
    local category="${2:-world}"
    
    echo -e "${BLUE}🌈 Running complete workflow for: $template_name${NC}"
    
    orchestrate_create "$template_name" "$category"
    
    echo -e "\n${YELLOW}⏸️  Pausing for template customization...${NC}"
    echo -e "Edit the template at: .trinity/redlight/templates/${template_name}.html"
    echo -e "Press Enter when ready to deploy..."
    read
    
    orchestrate_deploy "$template_name" "cloudflare"
    
    echo -e "\n${GREEN}🎉 Complete workflow finished!${NC}"
}

orchestrate_status() {
    local template_name="$1"
    
    echo -e "${BLUE}📊 Template Status: $template_name${NC}"
    echo -e "\n🔴 RedLight Status:"
    
    if [ -f ".trinity/redlight/templates/${template_name}.html" ]; then
        local size=$(du -h ".trinity/redlight/templates/${template_name}.html" | cut -f1)
        echo -e "  ✅ Template exists (${size})"
    else
        echo -e "  ❌ Template not found"
    fi
    
    echo -e "\n🟢 GreenLight Status:"
    echo -e "  Check memory system for task status"
    
    echo -e "\n🟡 YellowLight Status:"
    echo -e "  Check deployment platforms for live status"
}

# Main command router
case "${1:-}" in
    create)
        orchestrate_create "$2" "$3"
        ;;
    update)
        echo "Update orchestration not yet implemented"
        ;;
    deploy)
        orchestrate_deploy "$2" "$3"
        ;;
    status)
        orchestrate_status "$2"
        ;;
    workflow)
        orchestrate_workflow "$2" "$3"
        ;;
    campaign)
        echo "Campaign orchestration not yet implemented"
        ;;
    *)
        show_usage
        ;;
esac
```

---

## **INTEGRATION POINTS**

### 1. NATS Event Bus Integration

All three lights publish to NATS subjects for real-time coordination:

```
# GreenLight publishes task events
greenlight.task.created.{template_id}
greenlight.task.updated.{template_id}
greenlight.task.completed.{template_id}

# RedLight publishes template events
redlight.template.created.{template_id}
redlight.template.updated.{template_id}
redlight.template.deployed.{template_id}

# YellowLight publishes deployment events
yellowlight.deployment.started.{template_id}
yellowlight.deployment.succeeded.{template_id}
yellowlight.deployment.failed.{template_id}
```

### 2. Database Integration

Templates tracked across all three lights in PostgreSQL:

```sql
-- GreenLight tracks tasks
SELECT * FROM greenlight_items WHERE entity_id = 'blackroad-mars';

-- RedLight tracks templates
SELECT * FROM redlight_templates WHERE template_id = 'blackroad-mars';

-- YellowLight tracks deployments
SELECT * FROM yellowlight_deployments WHERE service_name = 'blackroad-mars';
```

### 3. Memory System Integration

All actions logged to PS-SHA∞ memory:

```bash
~/memory-system.sh search "blackroad-mars"
# Returns all GreenLight, RedLight, and YellowLight entries
```

---

## **AUTOMATION & CI/CD**

### GitHub Actions Integration

Create `.github/workflows/template-orchestration.yml`:

```yaml
name: Template Orchestration

on:
  push:
    paths:
      - '.trinity/redlight/templates/**'
  workflow_dispatch:
    inputs:
      template_name:
        description: 'Template name to deploy'
        required: true
      platform:
        description: 'Deployment platform'
        required: true
        default: 'cloudflare'

jobs:
  orchestrate:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Trinity
        run: |
          chmod +x .trinity/system/orchestrate-template.sh
          chmod +x .trinity/redlight/scripts/*.sh
          chmod +x .trinity/greenlight/scripts/*.sh
          chmod +x .trinity/yellowlight/scripts/*.sh
      
      - name: GreenLight - Track deployment
        run: |
          source .trinity/greenlight/scripts/memory-greenlight-templates.sh
          gl_progress "github-actions" \
            "Deploying ${{ github.event.inputs.template_name }}" \
            "Running orchestration workflow"
      
      - name: YellowLight - Deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        run: |
          .trinity/system/orchestrate-template.sh deploy \
            ${{ github.event.inputs.template_name }} \
            ${{ github.event.inputs.platform }}
      
      - name: GreenLight - Mark complete
        if: success()
        run: |
          source .trinity/greenlight/scripts/memory-greenlight-templates.sh
          gl_deploy "${{ github.event.inputs.template_name }}" \
            "https://${{ github.event.inputs.template_name }}.blackroad.io" \
            "Automated deployment via GitHub Actions"
```

---

## **MONITORING & OBSERVABILITY**

### Health Check Dashboard

```bash
#!/bin/bash
# .trinity/system/template-health-dashboard.sh
# Real-time health monitoring for all deployed templates

echo "🌈 Template Health Dashboard"
echo "=============================="

for template in .trinity/redlight/templates/*.html; do
    template_name=$(basename "$template" .html)
    echo -e "\n📊 $template_name"
    
    # RedLight metrics
    size=$(du -h "$template" | cut -f1)
    echo "  🔴 Size: $size"
    
    # YellowLight checks
    if command -v curl &> /dev/null; then
        url="https://${template_name##*-}.blackroad.io"
        status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || echo "000")
        if [ "$status" = "200" ]; then
            echo "  🟡 Status: ✅ Live ($status)"
        else
            echo "  🟡 Status: ❌ Down ($status)"
        fi
    fi
done
```

### Analytics Integration

```bash
# Track template usage with RedLight analytics
rl_analytics_record() {
    local template_name="$1"
    local views="$2"
    local avg_session="$3"
    local bounce_rate="$4"
    
    rl_log "🔴📊📈✅" \
        "analytics" \
        "$template_name" \
        "Views: $views, Avg session: ${avg_session}s, Bounce: ${bounce_rate}%"
}
```

---

## **BEST PRACTICES**

### 1. Always Track in GreenLight First
Before creating any template, create a GreenLight task to track the work.

### 2. Use Consistent Naming
- Template files: `blackroad-{name}.html`
- Task names: Match template names
- URLs: `{name}.blackroad.io`

### 3. Log Every Action
Use the memory templates for every significant action across all three lights.

### 4. Test Before Deploy
- Performance: Maintain 60 FPS target
- Compatibility: Test across browsers
- Accessibility: Validate WCAG compliance

### 5. Monitor After Deploy
- Set up health checks immediately
- Track analytics from day one
- Monitor error logs

### 6. Document Learnings
Use GreenLight to share learnings with the team for future templates.

---

## **TROUBLESHOOTING**

### Template Not Deploying

```bash
# 1. Check template exists
ls -la .trinity/redlight/templates/blackroad-{name}.html

# 2. Verify platform credentials
wrangler whoami  # For Cloudflare
railway whoami   # For Railway

# 3. Check YellowLight logs
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
# Review recent deployment logs

# 4. Manual deploy
wrangler pages deploy .trinity/redlight/templates/blackroad-{name}.html \
    --project-name={name}-blackroad
```

### GreenLight Task Not Updating

```bash
# Verify memory system is working
~/memory-system.sh list

# Check GreenLight script is sourced
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Re-run the logging command
gl_progress "agent" "status" "next-steps"
```

---

## **FUTURE ENHANCEMENTS**

### Phase 1: Core Orchestration (Current)
- [x] Document orchestration patterns
- [x] Create master orchestration script
- [ ] Implement GitHub Actions workflow
- [ ] Create health dashboard

### Phase 2: Advanced Features
- [ ] Template versioning system
- [ ] Automated rollback on failure
- [ ] A/B testing framework
- [ ] Performance benchmarking

### Phase 3: Intelligence Layer
- [ ] AI-powered template suggestions
- [ ] Automated optimization recommendations
- [ ] Predictive analytics
- [ ] Self-healing deployments

---

## **EXAMPLES**

### Example 1: Earth to Venus

```bash
# Complete orchestration for Venus template based on Earth

# Start workflow
.trinity/system/orchestrate-template.sh workflow blackroad-venus world

# This will:
# 1. Create GreenLight task
# 2. Copy template from base
# 3. Log to RedLight
# 4. Pause for customization
# 5. Deploy to Cloudflare
# 6. Set up monitoring
# 7. Mark complete in GreenLight
```

### Example 2: Animation Library

```bash
# Create a series of animation templates

for animation in "particles" "waves" "galaxy" "nebula"; do
    .trinity/system/orchestrate-template.sh create \
        "blackroad-${animation}" "animation"
done
```

---

## **CONCLUSION**

The Template Orchestration System brings together RedLight, GreenLight, and YellowLight into a unified workflow that:

- ✅ Tracks every step from conception to deployment
- ✅ Maintains consistency across all templates
- ✅ Automates repetitive tasks
- ✅ Provides real-time visibility
- ✅ Enables team coordination
- ✅ Scales to hundreds of templates

**One system. Three lights. Infinite templates.** 🌈

---

**Created:** December 24, 2025  
**Author:** BlackRoad OS Team  
**Version:** 1.0.0  
**Status:** 🎯 ACTIVE

🔴 RedLight · 🟢 GreenLight · 🟡 YellowLight · 🌈 Together
