# PHP Fullstack Developer Test

## Requirements
- PHP 8.1+
- Composer
- Node.js & NPM
- PostgreSQL
- Redis
- Minio (or any S3-compatible storage)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/muhasyraf/php-fullstack-test
   cd php-fullstack-test
    ```
2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node.js dependencies:
   ```bash
    npm install
    ```

4. Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```

5. Configure `.env` file with the necessary database and storage settings.
    ```bash
    # Application
    APP_NAME="Client Management Test"
    APP_ENV=local
    APP_KEY=
    APP_DEBUG=true
    APP_URL=http://localhost

    # Database
    DB_CONNECTION=pgsql
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=client_management_test
    DB_USERNAME=postgres
    DB_PASSWORD=your_password

    # Redis
    REDIS_CLIENT=predis
    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    # S3 Storage (Minio)
    AWS_ACCESS_KEY_ID=minioadmin
    AWS_SECRET_ACCESS_KEY=minioadmin
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=client-management
    AWS_ENDPOINT=http://127.0.0.1:9000
    AWS_URL=http://127.0.0.1:9000/client-management
    AWS_USE_PATH_STYLE_ENDPOINT=true
    ```

6. Generate the application key:
    ```bash
    php artisan key:generate
    ```

7. Create the database and run migrations:
    ```bash
    php artisan migrate
    ```
    
8. Set up Redis
    ```bash
    # Check Redis
    redis-cli ping
    ```

9. Set up Minio
    ```bash
    minio server /path/to/minio/data
    ```

10. Start development server:
    ```bash
    php artisan serve
    ```

11. Frontend build process:
    ```bash
    npm run dev
    ```

12. Access the app `http://localhost:8000`.