# Next.js Auth Template

A production-ready authentication template built with Next.js 16, Better Auth, Prisma, and Docker.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS
- **Secure Authentication**: Better Auth with email/password and social providers
- **Database**: Prisma ORM with PostgreSQL
- **Containerized**: Docker Compose for development and production
- **Protected Routes**: Admin dashboard with session management
- **Responsive Design**: Mobile-first with dark mode support

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── login/          # Authentication page
│   │   ├── admin/          # Protected admin dashboard
│   │   └── api/auth/       # Better Auth API routes
│   ├── components/         # React components
│   └── lib/               # Auth configuration and utilities
├── prisma/                # Database schema and migrations
├── scripts/               # Utility scripts
└── docker-compose.yml     # Container orchestration
```

## 🛠️ Quick Start

1. **Clone and setup:**
   ```bash
   git clone <this-repo>
   cd nextjs-auth-template
   cp .env.local.example .env.local
   # Edit .env.local and add your BETTER_AUTH_SECRET
   ```

2. **Start development:**
   ```bash
   docker-compose up -d postgres
   npm install
   npx prisma db push
   npm run clear-and-seed
   npm run dev
   ```

3. **Access the application:**
   - Homepage: http://localhost:3000
   - Login: http://localhost:3000/login
   - Admin: http://localhost:3000/admin
   - Default admin: admin@example.com / admin123

## 🏗️ Creating Client Projects

Use the project generator to create customized versions for clients:

```bash
node scripts/create-project.js acme-corp "Acme Corporation"
```

This will:
- Create a new project directory with the client name
- Replace all template variables with client-specific values
- Generate a custom README and configuration
- Set up client-specific database and container names

## 🐳 Docker Deployment

See [DOCKER.md](DOCKER.md) for detailed deployment instructions.

## 🔧 Environment Variables

Required variables in `.env.local`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/nextjs_auth_template
BETTER_AUTH_SECRET=your-secret-here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📝 License

MIT License - feel free to use for client projects.