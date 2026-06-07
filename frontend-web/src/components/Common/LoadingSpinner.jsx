/**
 * LoadingSpinner.jsx — Component hiển thị vòng xoay chờ tải dữ liệu
 *
 * Có thể dùng ở hai chế độ:
 *   - fullScreen: Chiếm toàn bộ màn hình (dùng khi tải trang)
 *   - inline: Hiển thị nhỏ trong nội dung (dùng trong nút hoặc bảng)
 *
 * Cách dùng:
 *   <LoadingSpinner />                    — Spinner toàn màn hình
 *   <LoadingSpinner fullScreen={false} /> — Spinner nhỏ inline
 *   <LoadingSpinner text="Đang tải..." /> — Kèm văn bản tùy chỉnh
 */

/**
 * @param {{
 *   fullScreen?: boolean,
 *   text?: string
 * }} props
 */
function LoadingSpinner({ fullScreen = true, text = 'Đang tải...' }) {
  // SVG vòng xoay
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <svg
        className="w-10 h-10 animate-spin text-alab-green"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12" cy="12" r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      {text && (
        <span className="text-sm text-slate-500">{text}</span>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        {spinner}
      </div>
    )
  }

  return spinner
}

export default LoadingSpinner
