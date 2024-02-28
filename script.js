function generateUUIDs(numUUIDs) {
    var uuids = [];
    for (var i = 0; i < numUUIDs; i++) {
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8); // Set the version to 4 (0100 in binary)
            return v.toString(16);
        });

        // Set the variant bits (101) for RFC 4122
        uuid = uuid.replace(/y/, (Math.random() * 4 | 8).toString(16));

        uuids.push(uuid);
    }

    document.getElementById('uuidDisplay').innerText = uuids.join('\n');
}
