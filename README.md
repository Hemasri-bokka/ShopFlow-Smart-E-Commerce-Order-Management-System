# 🛍️ ShopFlow – Smart E-Commerce & Order Management System

### Built using **Spring Boot | Hibernate | Angular | Angular Material**

ShopFlow is a full-stack e-commerce platform designed to provide a seamless online shopping experience. It includes product browsing, cart management, wishlist, order management, invoice generation, payment integration, chatbot assistance, and analytics.

---

## 🚀 Features

* 🛍️ **Product Catalog** – Browse and view available products.
* 🛒 **Shopping Cart** – Add, update, and remove products from the cart.
* ❤️ **Wishlist** – Save products for later.
* 📦 **Order Management** – Place and manage orders.
* 🧾 **Invoice Generation** – Generate invoices for orders.
* 💳 **Payment Gateway** – Support for online payments.
* 🤖 **Chatbot** – Provides assistance to users.
* 📊 **Google Analytics** – Track application usage.
* 📝 **Log4j** – Application logging.
* 🎨 **Angular Material** – Modern UI components.

---

## 🛠️ Tech Stack

### Frontend

* Angular
* Angular Material
* HTML
* CSS
* TypeScript

### Backend

* Java
* Spring Boot
* Hibernate
* REST APIs

### Database

* MySQL
* PostgreSQL

### Other Technologies

* Log4j
* Google Analytics
* Payment Gateway
* Chatbot

---

## 📂 Project Structure

```text
ShopFlow/
│
├── angularapp/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── springapp/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── docs/
│
├── README.md
├── LICENSE
├── CODE_OF_CONDUCT.md
└── .gitignore
```

---

## ⚙️ Prerequisites

Before running the project, make sure you have:

* Java
* Maven
* Node.js
* Angular CLI
* MySQL / PostgreSQL
* Git

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Hemasri-bokka/ShopFlow-Smart-E-Commerce-Order-Management-System.git
```

```bash
cd ShopFlow-Smart-E-Commerce-Order-Management-System
```

---

## 🖥️ Frontend Setup

Navigate to the Angular application:

```bash
cd angularapp
```

Install the required dependencies:

```bash
npm install
```

Run the application:

```bash
ng serve
```

Open your browser and visit:

```text
http://localhost:4200
```

---

## ⚙️ Backend Setup

Navigate to the Spring Boot application:

```bash
cd springapp
```

Build the project:

```bash
mvn clean install
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

---

## 🗄️ Database Configuration

Configure the database connection in the Spring Boot configuration file.

The configuration should contain the required:

```text
Database URL
Database Username
Database Password
Database Driver
```

Make sure the configured database is running before starting the backend.

---

## 🔄 Application Flow

```text
User
  │
  ▼
Angular Frontend
  │
  │ REST API
  ▼
Spring Boot Backend
  │
  ▼
Hibernate
  │
  ▼
Database
  │
  ▼
Response
  │
  ▼
Angular Frontend
```

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│            User              │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Angular Frontend        │
│ HTML | CSS | TypeScript      │
│ Angular Material             │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│       Spring Boot            │
│ Controllers                  │
│ Services                     │
│ Repositories                 │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          Hibernate           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      MySQL / PostgreSQL      │
└──────────────────────────────┘
```

---

## 🎯 Main Modules

### 👤 User Management

Users can register, log in, and manage their account.

### 🛍️ Product Management

Users can browse products and view product information.

### 🛒 Cart Management

Users can add products, modify quantities, and remove products.

### ❤️ Wishlist Management

Users can save products to their wishlist.

### 📦 Order Management

Users can place orders and view their order information.

### 🧾 Invoice Management

Invoices can be generated for orders.

### 💳 Payment

The system provides payment gateway integration for online purchases.

### 🤖 Chatbot

The chatbot provides assistance during the shopping experience.

---

## 👩‍💻 Author

### Bokka HemaSri

**GitHub:** [Hemasri-bokka](https://github.com/Hemasri-bokka)

**Repository:** [ShopFlow – Smart E-Commerce & Order Management System](https://github.com/Hemasri-bokka/ShopFlow-Smart-E-Commerce-Order-Management-System)

**LinkedIn:** [HemaSri](https://www.linkedin.com/in/hema-sri-2266302ba/)

**Email:** [hemasri.bokka@sasi.ac.in](mailto:hemasri.bokka@sasi.ac.in)

---

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

## ⭐ Show Your Support

If you find this project useful, please consider giving it a ⭐ on GitHub.

---

# 🛍️ ShopFlow

### Smart Shopping • Easy Ordering • Better Management
