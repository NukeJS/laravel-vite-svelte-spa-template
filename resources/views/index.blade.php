<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    @production
        @php
            $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
        @endphp
        @foreach ($manifest as $export)
            @if (isset($export['css']))
                @foreach ($export['css'] as $url)
                    <link rel="stylesheet" href="/build/{{ $url }}" />
                @endforeach
            @endif
        @endforeach
    @endproduction
</head>

<body>
    <div id="app"></div>
    @production
        @php
            $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
        @endphp
        <script type="module" src="/build/{{ $manifest['resources/js/main.ts']['file'] }}"></script>
    @else
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/js/main.ts"></script>
    @endproduction
</body>

</html>
