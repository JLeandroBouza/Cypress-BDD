<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README for Cypress-BDD Test Automation</title>
</head>
<body>

<h1 align="center">Cypress BDD Automation - SauceDemo</h1>

<p align="center">
  Este repositorio contiene pruebas automatizadas utilizando <strong>Cypress</strong> con el preprocesador de <strong>Cucumber</strong>, como parte de mi desarrollo y práctica en la automatización de pruebas en entornos BDD (Behavior Driven Development). Las pruebas se ejecutan sobre la página de prueba <a href="https://www.saucedemo.com/">SauceDemo</a>.
</p>

<h2>🔗 Índice</h2>
<ul>
  <li><a href="#objetivo-del-proyecto">🚀 Objetivo del Proyecto</a></li>
  <li><a href="#instalación-de-cypress-y-dependencias">⚙️ Instalación de Cypress y Dependencias</a></li>
  <li><a href="#estructura-del-proyecto">📁 Estructura del Proyecto</a></li>
  <li><a href="#página-de-pruebas">🌐 Página de Pruebas</a></li>
  <li><a href="#motivación-y-propósito">🎯 Motivación y Propósito</a></li>
  <li><a href="#futuro-desarrollo">🔧 Futuro Desarrollo</a></li>
  <li><a href="#contribuciones">🤝 Contribuciones</a></li>
  <li><a href="#contacto">📞 Contacto</a></li>
</ul>

<h2 id="objetivo-del-proyecto">🚀 Objetivo del Proyecto</h2>

<p>
El objetivo principal de este proyecto es poner en práctica mis habilidades en la automatización de pruebas end-to-end utilizando <strong>Cypress</strong>, con un enfoque en <strong>BDD</strong> mediante el uso de <strong>Cucumber</strong>. A través de este ejercicio, busco consolidar mis conocimientos en la creación de scripts de prueba que sean fáciles de entender y mantener, así como demostrar mi compromiso en seguir desarrollando mis habilidades en QA.
</p>

<h2 id="instalación-de-cypress-y-dependencias">⚙️ Instalación de Cypress y Dependencias</h2>

<h3>Requisitos previos</h3>

<p>
Asegúrate de tener instalado <strong>Node.js</strong> en tu sistema. Puedes descargarlo desde <a href="https://nodejs.org/">aquí</a>. Una vez que Node.js esté instalado, verifica la versión ejecutando:
</p>

<pre><code>node -v</code></pre>

<h3>Paso a paso para la instalación</h3>

<ol>
  <li><strong>Clonar el repositorio:</strong></li>
</ol>

<pre><code>git clone https://github.com/tu-usuario/cypress-bdd-automation.git
cd cypress-bdd-automation</code></pre>

<ol start="2">
  <li><strong>Instalar las dependencias:</strong></li>
</ol>

<p>Ejecuta el siguiente comando para instalar las dependencias del proyecto que se encuentran en el archivo <code>package.json</code>.</p>

<pre><code>npm install</code></pre>

<ol start="3">
  <li><strong>Dependencias incluidas:</strong></li>
</ol>

<ul>
  <li><strong>Cypress</strong> (<code>^10.3.0</code>): Framework de pruebas automatizadas para aplicaciones web.</li>
  <li><strong>Cypress-Cucumber-Preprocessor</strong> (<code>^12.0.0</code>): Plugin para integrar el estilo de pruebas BDD con Cucumber.</li>
  <li><strong>Webpack Preprocessor</strong> (<code>^5.12.0</code>): Preprocesador necesario para manejar los archivos <code>.feature</code> y ejecutar los tests.</li>
</ul>

<ol start="4">
  <li><strong>Ejecutar las pruebas:</strong></li>
</ol>

<p>Puedes ejecutar Cypress en modo interactivo con:</p>

<pre><code>npx cypress open</code></pre>

<p>O ejecutar las pruebas en modo headless con:</p>

<pre><code>npx cypress run</code></pre>

<h2 id="estructura-del-proyecto">📁 Estructura del Proyecto</h2>

<p>El proyecto está organizado en las siguientes carpetas:</p>

<ul>
  <li><code>cypress/e2e/features</code>: Contiene los archivos <code>.feature</code> que definen los escenarios de prueba en formato Gherkin.</li>
  <li><code>cypress/support/step_definitions</code>: Contiene las definiciones de pasos (<code>step definitions</code>) que implementan el comportamiento de las pruebas.</li>
  <li><code>cypress.config.js</code>: Configuración de Cypress para el proyecto, donde se definen los plugins y la ruta de los archivos.</li>
</ul>

<h2 id="página-de-pruebas">🌐 Página de Pruebas</h2>

<p>
El sitio web utilizado para las pruebas es <a href="https://www.saucedemo.com/">SauceDemo</a>, una plataforma utilizada comúnmente para simular flujos de login y compras, permitiendo practicar la automatización de pruebas en un entorno controlado.
</p>

<h2 id="motivación-y-propósito">🎯 Motivación y Propósito</h2>

<p>
Mi enfoque principal con este proyecto es profundizar en el uso de <strong>Cypress</strong> con <strong>BDD</strong>, utilizando <strong>Cucumber</strong> para crear pruebas legibles y mantenibles. Creo firmemente en la importancia de adoptar enfoques que hagan que las pruebas no solo sean eficientes, sino también comprensibles para otros miembros del equipo, como desarrolladores, testers y product owners.
</p>

<p>
Este repositorio refleja mi dedicación y pasión por el crecimiento continuo como <strong>QA automatizador</strong>. A medida que avanzo en mi carrera, me comprometo a mejorar constantemente mis habilidades, adoptando las mejores prácticas de la industria y explorando nuevas herramientas y metodologías.
</p>

<h2 id="futuro-desarrollo">🔧 Futuro Desarrollo</h2>

<p>
En versiones futuras, tengo la intención de:
</p>

<ul>
  <li>Añadir más pruebas que cubran otros flujos dentro de la aplicación.</li>
  <li>Explorar nuevas funcionalidades de Cypress y optimizar las pruebas para una ejecución más rápida.</li>
  <li>Implementar integración continua (CI) para la ejecución automatizada de las pruebas.</li>
</ul>

<h2 id="contribuciones">🤝 Contribuciones</h2>

<p>Este proyecto está abierto a contribuciones. Si deseas colaborar, por favor sigue estos pasos:</p>

<ol>
  <li>Haz un fork del repositorio.</li>
  <li>Crea una nueva rama (<code>git checkout -b feature/nueva-funcionalidad</code>).</li>
  <li>Realiza los cambios y realiza un commit (<code>git commit -m 'Añadir nueva funcionalidad'</code>).</li>
  <li>Haz push a la rama (<code>git push origin feature/nueva-funcionalidad</code>).</li>
  <li>Abre un Pull Request.</li>
</ol>

<h2 id="contacto">📞 Contacto</h2>

<p>
Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de mi perfil de GitHub, enviar un correo electrónico, o les comparto mi Linkedin:

<ul>
  <li>Email: <a href="mailto:jorge.leandrobouza@gmail.com">jorge.leandrobouza@gmail.com</a></li>
  
  <li>LinkedIn: <a href="https://www.linkedin.com/in/leandro-bouza/">https://www.linkedin.com/in/leandro-bouza/</a></li>
</ul>

</p>

<hr>

<p align="center"><strong>¡Gracias por visitar mi repositorio y espero que disfrutes de este proyecto tanto como yo disfruto mejorando mis habilidades como QA Automation!</strong></p>

</body>
</html>
