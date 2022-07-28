<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta
      name="description"
      content="Online Fresh Vegetable Delivery Shopping"
    />

    <title>{{ config('app.name', 'Veggy') }} | Home</title>
    
    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}" type="image/x-icon" />

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}?v=76693885" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
</body>
</html>
