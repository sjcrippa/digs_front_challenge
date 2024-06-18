export const fetchData = async () => {
  try {
    const response = await fetch('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching challenge data:', error);
    throw error;
  }
};
