# Build stage
FROM oven/bun:latest AS builder
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install
COPY . .
RUN bun run build

# Production stage
# NOTE: Astro's `base` config affects URLs and asset paths but not the
# output directory structure. The dist contents must live under
# /usr/share/nginx/html/anaalbiol/ so nginx serves them at /anaalbiol/*.
FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html/anaalbiol/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

