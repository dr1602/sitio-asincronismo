const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8zqCEvaRwHcfz3IhjhMMxQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd56432b939msh35bad6871fcbe67p1f22d1jsnb3f3a3b14f40',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options)
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
            ${videos.items.map(video => `

            <div class="group relative cursor-pointer border-[0.3vh] rounded-xl p-[3vh]">
                <a href='https://www.youtube.com/watch?v=${video.id.videoId}' target='_blank'>
                    <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src='${video.snippet.thumbnails.high.url}' alt='${video.snippet.description}' class="w-full">
                    </div>

                    <div class="mt-4 flex justify-between">
                        <h3 class="text-slate-600 group-hover:text-slate-300 mt-3 text-base sm:mt-[0.3vh] sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 select-none">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </a>

            </div>

            `).slice(0,6).join('')}            
        `;
        content.innerHTML = view;
    } catch (error) {
        window.alert(error);
    }
}) ();

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }