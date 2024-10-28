import { useEffect } from 'react';

const BookingWidget = () => {
    useEffect(() => {
        // Create a new script element each time the component mounts
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=47780&lang=1&months=12&preview=36';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array to load once on mount

    return (
        <div id="ferienhausmiete-de-widget3-47780">
            <a href="https://www.ferienhausmiete.de/47780.htm" target="_blank" rel="noopener noreferrer">
                Die Usedomperle - Direkt am Strand
            </a>
        </div>
    );
};

export default BookingWidget;
