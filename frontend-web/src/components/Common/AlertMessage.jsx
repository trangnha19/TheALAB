/**
 * AlertMessage.jsx — Component hiển thị thông báo thành công hoặc lỗi
 *
 * Hỗ trợ hai loại thông báo:
 *   - type="success" → Nền xanh lá (thành công)
 *   - type="error"   → Nền đỏ (lỗi)
 *
 * Cách dùng:
 *   <AlertMessage type="success" message="Lưu thành công!" />
 *   <AlertMessage type="error" message="Có lỗi xảy ra." />
 *   <AlertMessage type="error" message={null} />  — Không render gì
 */

/**
 * @param {{
 *   type: 'success' | 'error',
 *   message: string | null
 * }} props
 */
function AlertMessage({ type, message }) {
  // Không render gì nếu không có nội dung
  if (!message) return null

  // Cấu hình màu sắc theo loại thông báo
  const styles = {
    success: {
      wrapper: 'bg-emerald-50 border border-emerald-200 text-emerald-700',
      icon: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      ),
    },
    error: {
      wrapper: 'bg-red-50 border border-red-200 text-red-700',
      icon: (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      ),
    },
  }

  const style = styles[type] || styles.error

  return (
    <div className={`flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm ${style.wrapper}`}>
      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        {style.icon}
      </svg>
      <span>{message}</span>
    </div>
  )
}

export default AlertMessage
