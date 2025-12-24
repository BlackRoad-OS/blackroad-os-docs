#!/bin/bash
# Template Orchestration Master Script
# Coordinates RedLight, GreenLight, and YellowLight for template lifecycle

# Don't exit on error - we want to continue even if some systems are unavailable
# set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TRINITY_ROOT="$(dirname "$SCRIPT_DIR")"

# Source all Light systems (ignore errors if not available)
if [ -f "$TRINITY_ROOT/redlight/scripts/memory-redlight-templates.sh" ]; then
    source "$TRINITY_ROOT/redlight/scripts/memory-redlight-templates.sh" 2>/dev/null || true
fi

if [ -f "$TRINITY_ROOT/greenlight/scripts/memory-greenlight-templates.sh" ]; then
    source "$TRINITY_ROOT/greenlight/scripts/memory-greenlight-templates.sh" 2>/dev/null || true
fi

if [ -f "$TRINITY_ROOT/yellowlight/scripts/memory-yellowlight-templates.sh" ]; then
    source "$TRINITY_ROOT/yellowlight/scripts/memory-yellowlight-templates.sh" 2>/dev/null || true
fi

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Usage
show_usage() {
    cat << EOF
${CYAN}🌈 Template Orchestration System${NC}

Usage: orchestrate-template.sh <command> [options]

${GREEN}Commands:${NC}
  create <name> <category>        Create new template
  update <name> <changes>         Update existing template
  deploy <name> <platform>        Deploy template to platform
  status <name>                   Show template status
  workflow <name> <category>      Run complete workflow
  list [category]                 List all templates
  help                            Show this help message

${BLUE}Examples:${NC}
  orchestrate-template.sh create blackroad-mars world
  orchestrate-template.sh deploy blackroad-earth cloudflare
  orchestrate-template.sh workflow blackroad-jupiter world
  orchestrate-template.sh status blackroad-earth
  orchestrate-template.sh list world

${PURPLE}Platforms:${NC} cloudflare, railway, github, vercel, netlify
${PURPLE}Categories:${NC} world, website, animation, design, game, app, visual

${CYAN}The Three Lights:${NC}
  🔴 RedLight  - Template creation and design
  🟢 GreenLight - Project tracking and coordination
  🟡 YellowLight - Infrastructure and deployment

EOF
}

# Check if template exists
template_exists() {
    local template_name="$1"
    [ -f "$TRINITY_ROOT/redlight/templates/${template_name}.html" ]
}

# List all templates
list_templates() {
    local category="${1:-}"
    
    echo -e "${CYAN}📚 RedLight Template Library${NC}\n"
    
    if [ ! -d "$TRINITY_ROOT/redlight/templates" ]; then
        echo -e "${RED}❌ Templates directory not found${NC}"
        return 1
    fi
    
    local count=0
    
    for template in "$TRINITY_ROOT/redlight/templates"/*.html; do
        if [ -f "$template" ]; then
            local name=$(basename "$template" .html)
            local size=$(du -h "$template" | cut -f1)
            
            # Simple category detection based on filename
            local detected_cat="unknown"
            case "$name" in
                *earth*|*mars*|*world*|*planet*|*metaverse*) detected_cat="world" ;;
                *animation*|*motion*|*ultimate*) detected_cat="animation" ;;
                *page*|*site*) detected_cat="website" ;;
                *game*) detected_cat="game" ;;
            esac
            
            # Filter by category if specified
            if [ -n "$category" ] && [ "$category" != "$detected_cat" ]; then
                continue
            fi
            
            echo -e "  🔴 ${GREEN}${name}${NC}"
            echo -e "     Category: ${detected_cat} | Size: ${size}"
            count=$((count + 1))
        fi
    done
    
    echo -e "\n${BLUE}Total templates: ${count}${NC}"
}

# Main orchestration function - Create
orchestrate_create() {
    local template_name="$1"
    local category="${2:-world}"
    
    echo -e "${GREEN}🌈 Starting template orchestration for: ${template_name}${NC}\n"
    
    # Validate inputs
    if [ -z "$template_name" ]; then
        echo -e "${RED}❌ Error: Template name required${NC}"
        show_usage
        return 1
    fi
    
    # Check if template already exists
    if template_exists "$template_name"; then
        echo -e "${RED}❌ Error: Template ${template_name} already exists${NC}"
        return 1
    fi
    
    # Step 1: GreenLight - Create task
    echo -e "${GREEN}🟢 GreenLight: Creating task...${NC}"
    if command -v gl_feature &> /dev/null; then
        gl_feature "$template_name" "Create $category template" "🍖" "⭐"
    else
        echo "   Note: GreenLight templates not available (skipping)"
    fi
    
    # Step 2: RedLight - Create template
    echo -e "${RED}🔴 RedLight: Creating template...${NC}"
    
    local base_template="$TRINITY_ROOT/redlight/templates/blackroad-world-template.html"
    local new_template="$TRINITY_ROOT/redlight/templates/${template_name}.html"
    
    if [ ! -f "$base_template" ]; then
        echo -e "${YELLOW}⚠️  Base template not found, creating minimal template${NC}"
        cat > "$new_template" << 'TEMPLATE'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlackRoad OS Template</title>
    <style>
        body {
            margin: 0;
            background: linear-gradient(135deg, #FF9D00, #FF6B00, #FF0066, #D600AA, #7700FF, #0066FF);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 3rem;
            margin: 0 0 1rem 0;
        }
        p {
            font-size: 1.5rem;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌈 BlackRoad OS</h1>
        <p>Template Ready</p>
    </div>
</body>
</html>
TEMPLATE
    else
        cp "$base_template" "$new_template"
    fi
    
    if command -v rl_template_create &> /dev/null; then
        rl_template_create "$template_name" "$category" \
            "New $category template: $template_name"
    else
        echo "   Note: RedLight templates not available (skipping)"
    fi
    
    # Step 3: GreenLight - Update progress
    echo -e "${GREEN}🟢 GreenLight: Tracking progress...${NC}"
    if command -v gl_wip &> /dev/null; then
        gl_wip "$template_name" "Template created, ready for customization" "🌸" "👉"
    else
        echo "   Note: GreenLight templates not available (skipping)"
    fi
    
    echo -e "\n${GREEN}✅ Template orchestration complete!${NC}"
    echo -e "\n${BLUE}Next steps:${NC}"
    echo -e "  1. Edit: ${new_template}"
    echo -e "  2. Test: Open in browser"
    echo -e "  3. Deploy: orchestrate-template.sh deploy ${template_name} cloudflare"
}

# Main orchestration function - Deploy
orchestrate_deploy() {
    local template_name="$1"
    local platform="${2:-cloudflare}"
    
    echo -e "${YELLOW}🟡 Starting deployment orchestration for: ${template_name}${NC}\n"
    
    # Validate inputs
    if [ -z "$template_name" ]; then
        echo -e "${RED}❌ Error: Template name required${NC}"
        show_usage
        return 1
    fi
    
    # Check if template exists
    if ! template_exists "$template_name"; then
        echo -e "${RED}❌ Error: Template ${template_name} not found${NC}"
        return 1
    fi
    
    local url="https://${template_name##*-}.blackroad.io"
    
    # Step 1: GreenLight - Update status
    echo -e "${GREEN}🟢 GreenLight: Updating deployment status...${NC}"
    if command -v gl_progress &> /dev/null; then
        gl_progress "cece" "Deploying $template_name to $platform" \
            "Configuring deployment and monitoring"
    else
        echo "   Note: GreenLight templates not available (skipping)"
    fi
    
    # Step 2: YellowLight - Deploy
    echo -e "${YELLOW}🟡 YellowLight: Deploying to $platform...${NC}"
    
    local template_path="$TRINITY_ROOT/redlight/templates/${template_name}.html"
    
    case "$platform" in
        cloudflare)
            if command -v wrangler &> /dev/null; then
                echo "   Deploying to Cloudflare Pages..."
                wrangler pages deploy "$template_path" \
                    --project-name="${template_name}" || true
            else
                echo "   ⚠️  Wrangler CLI not found. Install: npm install -g wrangler"
                echo "   Manual deploy: wrangler pages deploy $template_path --project-name=${template_name}"
            fi
            ;;
        railway)
            echo "   Railway deployment requires manual setup"
            echo "   Visit: https://railway.app"
            ;;
        github)
            echo "   GitHub Pages deployment requires git push"
            echo "   Add template to repository and enable GitHub Pages"
            ;;
        *)
            echo "   Platform $platform deployment instructions:"
            echo "   Upload: $template_path"
            ;;
    esac
    
    if command -v yl_pages_deploy &> /dev/null; then
        yl_pages_deploy "$template_name" "$url" "v1.0.0"
    else
        echo "   Note: YellowLight templates not available (skipping)"
    fi
    
    # Step 3: RedLight - Log deployment
    echo -e "${RED}🔴 RedLight: Logging deployment...${NC}"
    if command -v rl_template_deploy &> /dev/null; then
        rl_template_deploy "$template_name" "$url" "$platform"
    else
        echo "   Note: RedLight templates not available (skipping)"
    fi
    
    # Step 4: GreenLight - Mark complete
    echo -e "${GREEN}🟢 GreenLight: Marking complete...${NC}"
    if command -v gl_deploy &> /dev/null; then
        gl_deploy "$template_name" "$url" "Deployed to $platform"
    else
        echo "   Note: GreenLight templates not available (skipping)"
    fi
    
    # Step 5: YellowLight - Set up monitoring
    echo -e "${YELLOW}🟡 YellowLight: Setting up monitoring...${NC}"
    if command -v yl_health_check &> /dev/null; then
        yl_health_check "$template_name" "$url" "300"
    else
        echo "   Note: YellowLight templates not available (skipping)"
    fi
    
    echo -e "\n${GREEN}✅ Deployment orchestration complete!${NC}"
    echo -e "Template should be live at: ${url}"
}

# Main orchestration function - Workflow (Create + Deploy)
orchestrate_workflow() {
    local template_name="$1"
    local category="${2:-world}"
    
    echo -e "${BLUE}🌈 Running complete workflow for: ${template_name}${NC}\n"
    
    # Step 1: Create
    orchestrate_create "$template_name" "$category"
    
    # Step 2: Pause for customization
    echo -e "\n${YELLOW}⏸️  Template created. Customize before deploying.${NC}"
    echo -e "Edit: $TRINITY_ROOT/redlight/templates/${template_name}.html"
    echo -e "\nPress Enter when ready to deploy, or Ctrl+C to exit..."
    read
    
    # Step 3: Deploy
    orchestrate_deploy "$template_name" "cloudflare"
    
    echo -e "\n${GREEN}🎉 Complete workflow finished!${NC}"
}

# Show template status
orchestrate_status() {
    local template_name="$1"
    
    if [ -z "$template_name" ]; then
        echo -e "${RED}❌ Error: Template name required${NC}"
        return 1
    fi
    
    echo -e "${BLUE}📊 Template Status: ${template_name}${NC}\n"
    
    echo -e "${RED}🔴 RedLight Status:${NC}"
    
    if template_exists "$template_name"; then
        local template_path="$TRINITY_ROOT/redlight/templates/${template_name}.html"
        local size=$(du -h "$template_path" | cut -f1)
        local modified=$(date -r "$template_path" "+%Y-%m-%d %H:%M:%S" 2>/dev/null || stat -f "%Sm" "$template_path" 2>/dev/null)
        echo -e "  ✅ Template exists"
        echo -e "  📏 Size: ${size}"
        echo -e "  📅 Modified: ${modified}"
        echo -e "  📁 Path: ${template_path}"
    else
        echo -e "  ❌ Template not found"
    fi
    
    echo -e "\n${GREEN}🟢 GreenLight Status:${NC}"
    echo -e "  ℹ️  Check memory system for task status"
    echo -e "  💾 Command: ~/memory-system.sh search \"${template_name}\""
    
    echo -e "\n${YELLOW}🟡 YellowLight Status:${NC}"
    echo -e "  ℹ️  Check deployment platforms for live status"
    echo -e "  🌐 URL: https://${template_name##*-}.blackroad.io"
}

# Update template
orchestrate_update() {
    local template_name="$1"
    local changes="${2:-Updated template}"
    
    if [ -z "$template_name" ]; then
        echo -e "${RED}❌ Error: Template name required${NC}"
        return 1
    fi
    
    if ! template_exists "$template_name"; then
        echo -e "${RED}❌ Error: Template ${template_name} not found${NC}"
        return 1
    fi
    
    echo -e "${BLUE}🔄 Updating template: ${template_name}${NC}\n"
    
    # RedLight - Log update
    echo -e "${RED}🔴 RedLight: Logging update...${NC}"
    if command -v rl_template_update &> /dev/null; then
        rl_template_update "$template_name" "$changes"
    else
        echo "   Note: RedLight templates not available (skipping)"
    fi
    
    # GreenLight - Update progress
    echo -e "${GREEN}🟢 GreenLight: Updating progress...${NC}"
    if command -v gl_wip &> /dev/null; then
        gl_wip "$template_name" "$changes" "🌸" "👉"
    else
        echo "   Note: GreenLight templates not available (skipping)"
    fi
    
    echo -e "\n${GREEN}✅ Template update logged${NC}"
}

# Main command router
case "${1:-}" in
    create)
        orchestrate_create "$2" "$3"
        ;;
    update)
        orchestrate_update "$2" "$3"
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
    list)
        list_templates "$2"
        ;;
    help|--help|-h)
        show_usage
        ;;
    *)
        show_usage
        exit 1
        ;;
esac
