# CECE OS - Sovereign AI Node

CECE OS runs on Cecilia, a Raspberry Pi 5 with Hailo-8 AI accelerator, providing 26 TOPS of sovereign AI compute.

## Hardware Specifications

| Component | Specification |
|-----------|--------------|
| **Device** | Raspberry Pi 5 |
| **AI Accelerator** | Hailo-8 (26 TOPS) |
| **Storage** | 500GB NVMe |
| **RAM** | 8GB |
| **Tailscale IP** | 100.72.180.98 |
| **Local IP** | 192.168.4.89 |

## Running Services

### Core Services

| Service | Port | Description |
|---------|------|-------------|
| **TTS-API** | 5001 | Text-to-speech service |
| **Monitor-API** | 5002 | System monitoring API |
| **CECE-API** | - | Node.js application server |
| **CECE-Gateway** | - | Network gateway service |

### Data Services

| Service | Port | Description |
|---------|------|-------------|
| **PostgreSQL 17** | 5432 | Primary database |
| **MinIO** | 9000/9001 | S3-compatible object storage |
| **InfluxDB** | 8086 | Time-series metrics |

### AI Services

| Service | Port | Description |
|---------|------|-------------|
| **Ollama** | 11434 | Local LLM inference |
| **Hailo Runtime** | - | 26 TOPS AI accelerator |

## Ollama Models

The following models are available on Cecilia:

```bash
# List models
curl http://cecilia:11434/api/tags

# Available models:
- cecilia:latest      # Custom BlackRoad model
- cece:latest         # CECE personality model
- cece3b:latest       # 3B parameter variant
- qwen3:8b            # Qwen 3 8B
- llama3:8b-instruct  # Llama 3 8B Instruct
- deepseek-coder:1.3b # Code completion
- qwen2.5-coder:3b    # Code completion
- glm-4.7:cloud       # Cloud-connected GLM
- kimi-k2.5:cloud     # Cloud-connected Kimi
```

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      CECE OS on Cecilia                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  TTS-API    │  │ Monitor-API │  │  CECE-Gateway       │  │
│  │  :5001      │  │  :5002      │  │  (Node.js)          │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    CECE-API (Node.js)                   ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────────┐  │
│  │  PostgreSQL   │  │    MinIO      │  │    Ollama       │  │
│  │  :5432        │  │  :9000/:9001  │  │    :11434       │  │
│  └───────────────┘  └───────────────┘  └─────────────────┘  │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Hailo-8 AI Accelerator (26 TOPS)           ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

## Connecting to CECE

### Via SSH
```bash
# Local network
ssh cecilia

# Via Tailscale (remote)
ssh cecilia-ts
```

### Via API
```bash
# Health check
curl http://cecilia:5001/health

# Ollama inference
curl http://cecilia:11434/api/generate -d '{
  "model": "cece:latest",
  "prompt": "Hello CECE!"
}'
```

## Monitoring

Access the monitoring dashboard:
- **Local**: http://192.168.4.89:5002
- **Tailscale**: http://100.72.180.98:5002

## Related Documentation

- [Agent Catalog](/docs/agent-catalog)
- [Device Fleet](/docs/system/devices)
- [Ollama Integration](/docs/services/ollama)
