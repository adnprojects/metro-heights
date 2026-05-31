# Metro Heights | High Rise Living in Hyderabad 🏙️

A premium, modern real estate landing page designed for **High-Conversion Lead Capture**, showcasing a refined high-rise residential apartment project located in Gachibowli, Hyderabad. The website balances sleek, modern typography with subtle animations to create an elegant, editorial digital presentation.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![Built With](https://img.shields.io/badge/Backend-Google%20Apps%20Script-orange)

## 📖 About The Project

This project acts as an optimized conversion funnel for the Metro Heights real estate initiative. Moving away from heavy, over-cluttered property layouts, it introduces a clean, minimalist experience that emphasizes panoramic skyline views, premium local connectivity, and everyday comfort. 

It features a serverless backend that captures high-intent customer inquiries directly into a Google Sheet in real time without the overhead or security risks of an external database.

## ✨ Key Features & Highlights

* **Skyline Aesthetic:** Minimalist UI structure, inter-font typography, generous whitespace, and responsive layouts designed for Hyderabad's premium market.
* **Scroll-Driven Interactions:** Integrated `IntersectionObserver` elements create polished, organic fading scroll reveal effects.
* **Serverless Lead Pipeline:** Natively routes form submissions directly to a Google Sheet via a custom Google Apps Script endpoint.
* **CORS-Proof Architecture:** Communicates data via URL-encoded form streams to eliminate pre-flight CORS blockages on standard web hosts.
* **Adaptive Sticky Navigation:** Global header seamlessly adapts and transitions dynamically based on user scroll velocity and viewport position.

## 🛠️ Built With

* **HTML5** (Semantic structures, native validation matchers)
* **CSS3** (Modern layout grids, custom properties, cross-browser transitions)
* **Vanilla JavaScript** (Asynchronous API streaming, intersection viewport tracing)
* **Google Apps Script** (Serverless execution endpoint, automatic structural row calculation)

---

## 🚀 Architecture & Setup

### 1. Spreadsheet Initialization
Create a Google Sheet with the following layout structure in row `1`:
* **A:** Timestamp | **B:** Full Name | **C:** Phone Number | **D:** Email | **E:** Intrested In | **F:** Message | **G:** Source

### 2. Backend Deployment (Google Apps Script)
1. Open the Spreadsheet $\rightarrow$ Extensions $\rightarrow$ Apps Script.
2. Paste the `doPost(e)` deployment script.
3. Click **Deploy** $\rightarrow$ **New deployment**.
4. Set *Execute as* to **Me** and *Who has access* to **Anyone**.
5. Copy the generated Web App macro URL.

### 3. ⚖️ License & Attribution
Designed and engineered for Metro Heights Real Estate Project — An ADN Initiative. All rights reserved.
