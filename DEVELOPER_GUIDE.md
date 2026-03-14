# 🔧 JP Service (service.jpecom.com) — Developer Guide

> **Domain:** `service.jpecom.com`
> **Server:** `103.175.248.244` — `/opt/jpecom-service`
> **Port:** 3004

---

## 📋 Trạng thái: Chưa khởi tạo

Thư mục này chưa có code. Khi bắt đầu, chọn 1 trong 2:

### Option A: Next.js API
```bash
cd jpecom-service
npx -y create-next-app@14 ./ --typescript --eslint --no-tailwind --app --src-dir --no-import-alias
```

### Option B: Express API
```bash
cd jpecom-service
npm init -y
npm install express cors dotenv prisma @prisma/client
```

---

## 🔑 SSH (tài khoản riêng)

```
Server: 103.175.248.244
User: trduy
Password: TruongDuy@JP2026
```

> ⚠️ Tài khoản `trduy` chỉ có quyền truy cập `/opt/jpecom-tech` và `/opt/jpecom-service`.

---

## 🔄 Deploy (khi đã có code)

### 1. Tạo Dockerfile + docker-compose.yml
Tham khảo `jpecom-tech/Dockerfile` — sửa port sang `3004`.

### 2. Upload & build
```bash
scp -r ./ trduy@103.175.248.244:/opt/jpecom-service/
ssh trduy@103.175.248.244 "cd /opt/jpecom-service && docker compose up -d --build"
```

### 3. Check
```bash
ssh trduy@103.175.248.244 "docker logs jpecom-service --tail 20"
```

---

## 🌐 Nginx: Đã sẵn sàng

Nginx trên server đã config `service.jpecom.com` → port 3004 (SSL + Certbot).
Khi container chạy trên port 3004, domain sẽ tự hoạt động.
