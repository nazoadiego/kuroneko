FROM php:8.2-fpm

# Install system dependencies

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_pgsql mbstring exif pcntl bcmath


# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy everything
COPY . .

# Install PHP dependencies
RUN composer install

# Don't install Node here, handled by vite service

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
