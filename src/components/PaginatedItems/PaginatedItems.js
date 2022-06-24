import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import StudentsPagination from '../AdminSection/StudentsPagination/StudentsPagination';
import { PaginationWrapper, StyledReactPaginate } from './PaginateItems.style';

function PaginatedItems({ items, itemsPerPage, deleteStudent, togglePreviewModal, toggleEditModal }) {
    // Pagination State
    const [currentItems, setCurrentItems] = useState(items);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    // Effect
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    // Functions
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <PaginationWrapper>
            <StudentsPagination 
                currentItems={currentItems} 
                deleteStudent={deleteStudent}
                togglePreviewModal={togglePreviewModal}  
                toggleEditModal={toggleEditModal}  
            />
            <StyledReactPaginate
                breakLabel="..."
                nextLabel={"Next"}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={"Previous"}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
            />
        </PaginationWrapper>
    )
}

export default PaginatedItems;