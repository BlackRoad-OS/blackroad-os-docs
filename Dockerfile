FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static
COPY --from=builder /app/docusaurus.config.js ./
COPY --from=builder /app/sidebars.js ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/README.md ./
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
