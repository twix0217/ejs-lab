<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= category %> - <%= restaurant.name %></title>
</head>
<body>
  <%- include('partials/nav') %>
  <h1><%= category %> Menu</h1>
  <ul>
    <% menuItems.forEach(item => { %>
      <li>
        <strong><%= item.name %></strong><br>
        Price: $<%= item.price %><br>
        Rating: <%= item.rating %><br>
        <p><%= item.details %></p>
      </li>
    <% }); %>
  </ul>
</body>
</html>
