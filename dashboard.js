// Function to fetch content from a page using AJAX
function fetchContent(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error('Failed to fetch content from ' + url));
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
}

// Map words to their corresponding URLs
const wordUrls = {
    'Research': 'hoverconent/research.html',
    'External': 'hoverconent/external.html',
    'Internal': 'hoverconent/internal.html',
    'B2C': 'hoverconent/b2c.html',
    'B2B': 'hoverconent/b2b.html',
    'Online': 'hoverconent/online.html',
    'Interview': 'hoverconent/interview.html',
    'Public Data': 'hoverconent/publicdata.html',
    'Health': 'hoverconent/health.html',
    'Planning': 'hoverconent/planning.html',
    'PRD': 'hoverconent/prd.html',
    'Specs': 'hoverconent/specs.html',
    'Desiging': 'hoverconent/desiging.html', 
    'Hardware': 'hoverconent/hardware.html',
    'Software': 'hoverconent/software.html',
    'Manufacturing': 'hoverconent/manufacturing.html',
    'Material': 'hoverconent/material.html',
    'Production': 'hoverconent/production.html',
    'Sales/Marketing': 'hoverconent/sales.html',
    'OnlineSales': 'hoverconent/onlinesales.html',
    'Dealership': 'hoverconent/dealership.html',

};



const hoverInfo = document.getElementById('hover-info');

const labels = document.querySelectorAll('.label');
labels.forEach(label => {
    label.addEventListener('mouseenter', async () => {
       
        const labelText = label.textContent;
        
        // Check if the hovered word has a corresponding URL
        if (wordUrls.hasOwnProperty(labelText)) {
            // Fetch content from the corresponding URL
            try {
                const content = await fetchContent(wordUrls[labelText]);
                
                // Set the hover info text to the fetched content
                hoverInfo.innerHTML = content;
                
                // Position the hover info div at the bottom right corner of the page
                hoverInfo.style.bottom = '20px';
                hoverInfo.style.right = '20px';
                
                // Make the hover info div visible
                hoverInfo.style.display = 'block';
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        }
    });

    label.addEventListener('mouseleave', () => {
        // Clear the hover info content
        hoverInfo.innerHTML = '';
        
        // Hide the hover info div
        hoverInfo.style.display = 'none';
    });
});
