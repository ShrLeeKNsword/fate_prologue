function loadResource(type, originalUrl, fallbackUrl) {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            let url;
            //From asia
            //if(data.country === "CN") or China specifically?
            if(data.continent_code === "AS") {
                url = originalUrl;
            } else {
                url = fallbackUrl;
            }
            if(type === 'stylesheet') {
                console.log("Loading stylesheet")
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = url;
                document.head.appendChild(link);
            }
            if(type === 'script') {
                console.log("Loading script")
                let script = document.createElement('script');
                script.src = url;
                document.head.appendChild(script);
            }
        })
        .catch(error => {
            // Fallback to default
            if(type === 'stylesheet') {
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = fallbackUrl;
                document.head.appendChild(link);
            }
            if(type === 'script') {
                let script = document.createElement('script');
                script.src = fallbackUrl;
                document.body.appendChild(script);
            }
        });
}

//Original URL is for clients located in CN and the other is for clients outside CN
//Only stylesheet loading is recommended as script are expected to load in sync
loadResource('stylesheet', 'https://npm.elemecdn.com/element-ui/lib/theme-chalk/index.css', 'https://unpkg.com/element-ui/lib/theme-chalk/index.css');
loadResource('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css', 'https://kit.fontawesome.com/6861b7b8a4.js');
