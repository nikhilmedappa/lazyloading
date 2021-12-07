import React, { useEffect, useState, Suspense } from 'react';
import { Skeleton, Grid } from '@mui/material';

const ContactComponent = React.lazy(() => import('./contact'))

const Home = () => {

    const [listContacts, setListContacts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
		console.log(isFetching);
	};

    const fetchData = async () => {
		setTimeout(async () => {
			const result = await fetch(`https://picsum.photos/v2/list?page=${page}`);
			const data = await result.json();
			setPage(page + 1);
			setListContacts(() => {
				return [...listContacts, ...data];
			});
		}, 1000);
	};

    useEffect(() => {
		if (!isFetching) return;
		setTimeout(() => {fetchMoreListItems()}, 1000);
	}, [isFetching]);

    const fetchMoreListItems = () => {
		fetchData();
		setIsFetching(false);
	};

    return (
        <Grid align="center">
			{listContacts.map((listItem) => (
				<div className='card' key={listItem.id}>
					<Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
						<ContactComponent src={listItem.download_url} name={listItem.author} />
					</Suspense>
				</div>
			))}
			{isFetching && <Skeleton variant="rectangular" width={210} height={118} />}
		</Grid>
    )
}

export default Home;