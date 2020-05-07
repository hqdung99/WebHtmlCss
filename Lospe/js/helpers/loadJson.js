export async function loadJsonFile(filePath) {
    try {
        var result = await fetch(filePath);
        var data = await result.json();
        return data;
    } catch(err) {
        console.log(err);
        return null;
    }
}