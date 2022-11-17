askForApproval();
			
function askForApproval() {
    if(Notification.permission === "granted") {
        createNotification('Wow! This is great', 'created by @study.tonight', 'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
    }
    else {
        Notification.requestPermission(permission => {
            if(permission === 'granted') {
                createNotification('Wow! This is great', 'created by @study.tonight', 'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
            }
        });
    }
}

export function createNotification(title, text, icon) {
    const noti = new Notification(title, {
        body: text,
        icon
    });
}